'use client';

import { useRef, useEffect, Suspense, useState } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useTexture, Html, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';
import gsap from 'gsap';

const GLOBE_RADIUS = 2.3;
const CAMERA_ZOOM_DISTANCE = 5.5;

export function convertLatLngToVector3(lat, lng, radius) {
  const phi = (90 - lat) * (Math.PI / 180);
  const theta = (lng + 180) * (Math.PI / 180);

  return new THREE.Vector3(
    -(radius * Math.sin(phi) * Math.cos(theta)),
    radius * Math.cos(phi),
    radius * Math.sin(phi) * Math.sin(theta),
  );
}

function CameraController({ activeLocation, controlsRef, isDragging, pointerRef }) {
  const { camera, size, gl } = useThree();
  const isFirstRun = useRef(true);
  const animTimeline = useRef(null);
  const pointerAnimTimeline = useRef(null);
  const [isInView, setIsInView] = useState(false);
  const prevIsDragging = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    if (gl.domElement) observer.observe(gl.domElement);
    return () => observer.disconnect();
  }, [gl.domElement]);

  useEffect(() => {
    if (!isInView || !activeLocation?.country) return;

    const aspect = size.width / size.height;
    const zoomOutDist = aspect < 1 ? 6.5 / Math.sqrt(aspect) : 6.5;
    const zoomInDist = aspect < 1 ? 3.55 / Math.sqrt(aspect) : 3.55;
    const baseVector = convertLatLngToVector3(activeLocation.country.lat, activeLocation.country.lng, GLOBE_RADIUS);
    const targetDir = baseVector.clone().normalize();
    const currentDir = camera.position.clone().normalize();
    const currentDist = camera.position.length();

    if (isDragging) {
      prevIsDragging.current = true;
      if (animTimeline.current) animTimeline.current.kill();

      const animState = { distance: currentDist };
      animTimeline.current = gsap.timeline({
        onUpdate: () => {
          camera.position.normalize().multiplyScalar(animState.distance);
          if (controlsRef?.current) controlsRef.current.update();
        },
      });
      animTimeline.current.to(animState, { distance: zoomOutDist, duration: 0.3, ease: 'power2.out' });

      if (pointerRef?.current) {
        if (pointerAnimTimeline.current) pointerAnimTimeline.current.kill();
        let startPointerPos = targetDir.clone();
        if (pointerRef.current.position.lengthSq() > 0.1) {
          startPointerPos = pointerRef.current.position.clone().normalize();
        }
        const pState = { t: 0 };
        const tempPDir = new THREE.Vector3();
        pointerAnimTimeline.current = gsap.timeline({
          onUpdate: () => {
            tempPDir.copy(startPointerPos).lerp(targetDir, pState.t).normalize();
            pointerRef.current.position.copy(tempPDir).multiplyScalar(GLOBE_RADIUS);
          },
        });
        pointerAnimTimeline.current.to(pState, { t: 1, duration: 0.2, ease: 'power1.out' });
      }

      return;
    }

    if (animTimeline.current) animTimeline.current.kill();
    if (pointerAnimTimeline.current) pointerAnimTimeline.current.kill();

    let startPointerPos = targetDir.clone();
    if (pointerRef?.current && pointerRef.current.position.lengthSq() > 0.1) {
      startPointerPos = pointerRef.current.position.clone().normalize();
    } else if (pointerRef?.current) {
      pointerRef.current.position.copy(targetDir).multiplyScalar(GLOBE_RADIUS);
    }

    const animState = {
      t: 0,
      pointerT: 0,
      distance: currentDist,
    };

    const tempDir = new THREE.Vector3();
    const tempPointerDir = new THREE.Vector3();

    animTimeline.current = gsap.timeline({
      onUpdate: () => {
        tempDir.copy(currentDir).lerp(targetDir, animState.t).normalize();
        camera.position.copy(tempDir).multiplyScalar(animState.distance);
        camera.lookAt(0, 0, 0);
        if (controlsRef?.current) controlsRef.current.update();

        if (pointerRef?.current) {
          tempPointerDir.copy(startPointerPos).lerp(targetDir, animState.pointerT).normalize();
          pointerRef.current.position.copy(tempPointerDir).multiplyScalar(GLOBE_RADIUS);
        }
      },
    });

    const distanceToTarget = currentDir.distanceTo(targetDir);

    if (isFirstRun.current) {
      animTimeline.current.to(animState, { t: 1, pointerT: 1, duration: 1.5, ease: 'power3.out' });
      animTimeline.current.to(animState, { distance: zoomInDist, duration: 1.5, ease: 'power3.out' }, '<');
      isFirstRun.current = false;
    } else if (prevIsDragging.current) {
      animTimeline.current.to(animState, { t: 1, pointerT: 1, duration: 0.6, ease: 'power2.out' });
      animTimeline.current.to(animState, { distance: zoomInDist, duration: 0.6, ease: 'power2.out' }, '<');
      prevIsDragging.current = false;
    } else if (distanceToTarget < 0.2) {
      animTimeline.current.to(animState, { t: 1, pointerT: 1, duration: 0.5, ease: 'power2.inOut' });
      animTimeline.current.to(animState, { distance: zoomInDist, duration: 0.5, ease: 'power2.out' }, '>');
    } else {
      animTimeline.current.to(animState, { distance: zoomOutDist, duration: 0.5, ease: 'power2.out' });
      animTimeline.current.to(animState, { t: 1, duration: 0.8, ease: 'power2.inOut' }, '>');
      animTimeline.current.to(animState, { pointerT: 1, duration: 0.6, ease: 'power2.inOut' }, '>');
      animTimeline.current.to(animState, { distance: zoomInDist, duration: 0.6, ease: 'power2.inOut' }, '>');
    }

    return () => {
      if (animTimeline.current) animTimeline.current.kill();
      if (pointerAnimTimeline.current) pointerAnimTimeline.current.kill();
    };
  }, [activeLocation, isDragging, size, camera, controlsRef, isInView, pointerRef]);

  return null;
}

function ClosestCountryTracker({ isDragging, onClosestChange, locationsData }) {
  const { camera } = useThree();
  const currentClosest = useRef(-1);

  useFrame(() => {
    if (isDragging && locationsData?.length) {
      let closestIdx = 0;
      let minDistance = Infinity;

      for (let i = 0; i < locationsData.length; i++) {
        const item = locationsData[i];
        const pos = convertLatLngToVector3(item.lat, item.lng, GLOBE_RADIUS);
        const dist = camera.position.distanceTo(pos);
        if (dist < minDistance) {
          minDistance = dist;
          closestIdx = i;
        }
      }

      if (closestIdx !== currentClosest.current) {
        currentClosest.current = closestIdx;
        onClosestChange(closestIdx);
      }
    }
  });

  return null;
}

function RotatingSphere({ activeLocation, pointerRef }) {
  const colorMap = useTexture('/images/earth.jpg');
  const htmlWrapperRef = useRef(null);

  useFrame(({ camera }) => {
    if (pointerRef.current && htmlWrapperRef.current) {
      const distance = camera.position.length();
      const threshold = GLOBE_RADIUS / distance;
      const pointDir = pointerRef.current.position.clone().normalize();
      const cameraDir = camera.position.clone().normalize();
      const dot = pointDir.dot(cameraDir);

      if (dot < threshold - 0.05) {
        htmlWrapperRef.current.style.opacity = '0';
      } else {
        htmlWrapperRef.current.style.opacity = '1';
      }
    }
  });

  return (
    <group>
      <mesh>
        <sphereGeometry args={[GLOBE_RADIUS, 64, 64]} />
        <meshStandardMaterial map={colorMap} roughness={0.7} metalness={0.1} />
      </mesh>

      <group ref={pointerRef}>
        {activeLocation?.country && (
          <Html center>
            <div
              ref={htmlWrapperRef}
              className="text-rose-500 w-8 h-8 pointer-events-none drop-shadow-md -translate-y-4 transition-opacity duration-200"
            >
              {/* <svg viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z" />
              </svg> */}
              <img
          src="/images/pin.png"
          alt="Location pin"
          className="w-full h-full object-contain"
        />
            </div>
          </Html>
        )}
      </group>
    </group>
  );
}

export default function Globe({
  activeLocation,
  controlsRef,
  isDragging,
  onDragStart,
  onDragEnd,
  onClosestChange,
  locationsData = [],
}) {
  const pointerRef = useRef(null);

  return (
    <div className={`relative w-full h-full ${isDragging ? 'cursor-grabbing' : 'cursor-grab'}`}>
      <Canvas camera={{ position: [0, 0, CAMERA_ZOOM_DISTANCE], fov: 50 }}>
        <ambientLight intensity={1} />
        <directionalLight position={[10, 10, 10]} intensity={1.5} />

        <Suspense fallback={null}>
          <RotatingSphere activeLocation={activeLocation} pointerRef={pointerRef} />
        </Suspense>

        <CameraController
          activeLocation={activeLocation}
          controlsRef={controlsRef}
          isDragging={isDragging}
          pointerRef={pointerRef}
        />
        <ClosestCountryTracker isDragging={isDragging} onClosestChange={onClosestChange} locationsData={locationsData} />

        <OrbitControls ref={controlsRef} enablePan={false} enableZoom={false} onStart={onDragStart} onEnd={onDragEnd} />
      </Canvas>
    </div>
  );
}
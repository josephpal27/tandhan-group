"use client";

import { useEffect, useRef } from "react";
import { useInView, animate } from "framer-motion";

const valuesData = [
    {
        id: 1,
        value: 31,
        title: "Years of Experience",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing sit amet elit.",
    },
    {
        id: 2,
        value: 3000,
        title: "Clients Served",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing  elit.",
    },
    {
        id: 3,
        value: 25,
        title: "Country Presence",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing sit amet elit.",
    },
    {
        id: 4,
        value: 2000,
        title: "Total Workforce",
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing sit amet elit.",
    },
];

const Counter = ({ value, inView }) => {
    const ref = useRef(null);

    useEffect(() => {
        if (!inView) return;

        const node = ref.current;
        const controls = animate(0, value, {
            duration: 2,
            ease: "easeOut",
            onUpdate(latest) {
                if (node) {
                    node.textContent = Math.round(latest).toLocaleString();
                }
            },
        });

        return () => controls.stop();
    }, [inView, value]);

    return <span ref={ref}>0</span>;
};

const ValuesRow = () => {

    const sectionRef = useRef(null);
    const isInView = useInView(sectionRef, { once: true, amount: 0.4 });

    return (
        <section ref={sectionRef} className="mt-[-8rem] relative z-50">
            <div className="bg-white text-primary flex justify-between p-[3rem] shadow-[0px_5px_15px_rgba(0,0,0,0.5)]">
                {valuesData.map((item, index) => {
                    return (
                        <div key={index} className="w-[23%]">
                            <span className="text-[3rem] font-semibold">
                                <Counter value={item.value} inView={isInView} />+
                            </span>
                            <div className="w-[30%] h-[1px] bg-primary mt-[0.3rem]"></div>
                            <span dangerouslySetInnerHTML={{ __html: item.title }} className="
                                block mt-[1.5rem] text-[1.3rem] font-semibold leading-[1]
                            ">

                            </span>
                            <p className="mt-[1rem] text-[0.9rem]">
                                {item.desc}
                            </p>
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default ValuesRow
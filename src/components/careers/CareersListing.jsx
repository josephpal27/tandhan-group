"use client";

import { useMemo, useState } from "react";
import CareersFilters from "./CareersFilters";
import CareersPosts from "./CareersPosts";
import { careersData } from "@/data/careersData";

const sectors = [
    "Protective Solutions",
    "Energy Solutions",
    "Textiles",
    "Hospitality",
];

const CareersListing = () => {
    const [activeSectors, setActiveSectors] = useState([]);
    const [titleQuery, setTitleQuery] = useState("");
    const [locationQuery, setLocationQuery] = useState("");

    const toggleSector = (sector) => {
        setActiveSectors((prev) =>
            prev.includes(sector)
                ? prev.filter((s) => s !== sector)
                : [...prev, sector]
        );
    };

    const filteredPosts = useMemo(() => {
        return careersData.filter((post) => {
            const matchesSector =
                activeSectors.length === 0 || activeSectors.includes(post.sector);
            const matchesTitle = titleQuery
                ? post.title.toLowerCase().includes(titleQuery.toLowerCase())
                : true;
            const matchesLocation = locationQuery
                ? post.location.toLowerCase().includes(locationQuery.toLowerCase())
                : true;

            return matchesSector && matchesTitle && matchesLocation;
        });
    }, [activeSectors, titleQuery, locationQuery]);

    return (
        <section className="pt-[2.5rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]">

            {/* Head */}
            <div>
                <h2>Bring Your Career Here</h2>
                <p className="mt-[0.8rem] lg:mt-[1.2rem] w-full lg:w-[55%]">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum
                    minus recusandae itaque labore, asperiores reiciendis
                    exercitationem nemo. Porro, voluptatem iusto.
                </p>
            </div>

            {/* Listings */}
            <div className="mt-[2rem] lg:mt-[3rem] flex justify-between flex-wrap gap-y-[2rem]">

                {/* Left */}
                <div className="w-full lg:w-[25%] h-max">
                    <CareersFilters
                        sectors={sectors}
                        activeSectors={activeSectors}
                        onSectorToggle={toggleSector}
                    />
                </div>

                {/* Right */}
                <div className="w-full lg:w-[70%]">
                    <CareersPosts
                        posts={filteredPosts}
                        titleQuery={titleQuery}
                        locationQuery={locationQuery}
                        onTitleChange={setTitleQuery}
                        onLocationChange={setLocationQuery}
                    />
                </div>

            </div>
        </section>
    );
};

export default CareersListing;
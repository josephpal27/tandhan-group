const CareersFilters = ({ sectors, activeSectors, onSectorToggle }) => {
    return (
        <aside className="border border-black/10 rounded-lg p-[1.2rem] lg:p-[1.5rem] h-fit">
            <h4 className="font-medium">Sectors</h4>

            <ul className="mt-[1rem] space-y-[0.7rem]">
                {sectors.map((sector) => (
                    <li key={sector}>
                        <label className="flex items-center gap-[0.6rem] cursor-pointer text-sm">
                            <input
                                type="checkbox"
                                checked={activeSectors.includes(sector)}
                                onChange={() => onSectorToggle(sector)}
                            />
                            {sector}
                        </label>
                    </li>
                ))}
            </ul>
        </aside>
    );
};

export default CareersFilters;
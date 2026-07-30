
const CareersFilters = ({ sectors, activeSectors, onSectorToggle }) => {
    return (
        <aside className="border border-primary/20 rounded-md p-[1rem] lg:p-[1.5rem] shadow-[1px_1px_5px_rgba(0,0,0,0.15)]">

            <span className="text-[1.6rem] font-semibold text-gray-500">
                Sectors
            </span>

            <ul className="mt-[1rem] space-y-[0.7rem]">
                {sectors.map((sector) => (
                    <li key={sector}>
                        <label className="flex items-center gap-[0.5rem] cursor-pointer select-none">
                            <input
                                type="checkbox"
                                checked={activeSectors.includes(sector)}
                                onChange={() => onSectorToggle(sector)}
                                className="w-[18px] h-[18px] accent-primary"
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
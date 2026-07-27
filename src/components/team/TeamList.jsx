import {teamData} from "@/data/teamData";

const TeamList = () => {
    return (
        <section className="pt-[2rem] sm:pt-[3rem] lg:pt-[4rem] xl:pt-[4.5rem] 2xl:pt-[5rem]">
            <h6>
                Our Leaders
            </h6>
            <p className="mt-[0.8rem] lg:mt-[1.2rem] w-full lg:w-[55%]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit quaerat labore accusantium doloremque natus ipsa quod voluptas ullam quisquam corporis.
            </p>

            {/* Row */}
            <div className="flex flex-wrap mt-[3rem]">
                {teamData.map((team, index) => {
                    return(
                        <div key={index} className="w-[24%]">
                            <img src="" alt={team.name} />
                        </div>
                    )
                })}
            </div>
        </section>
    )
}

export default TeamList

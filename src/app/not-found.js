import Link from "next/link";

export const metadata = {
  title: "Page Not Found - Tandhan Group",
  description: "",
};

export default function NotFound() {
    return (
        <>
            <section className="h-[100dvh] bg-primary flex flex-col justify-center items-center">
                <h1 className="
                    text-[4.5rem] sm:text-[5.5rem] lg:text-[6.2rem] xl:text-[6.6rem] 2xl:text-[7rem]
                    text-white tracking-[3] mt-[2rem] lg:mt-[3rem]
                ">
                    404
                </h1>
                <p className="
                    text-[1.5rem] sm:text-[2rem] lg:text-[2.1rem] xl:text-[2.3rem] 2xl:text-[2.5rem]
                    text-white tracking-[4]
                ">
                    PAGE NOT FOUND
                </p>
                <Link href="/" className="
                    border-[2px] font-medium border-white hover:bg-white text-white hover:text-primary transition
                    px-[1.5rem] py-[0.4rem] mt-[1.5rem] block
                ">
                    View Home
                </Link>
            </section>
        </>
    );
}
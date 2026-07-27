import { notFound } from "next/navigation";
import HeroBanner from "@/components/HeroBanner";
import BlogDetailsContent from "@/components/media/BlogDetailsContent";
import { eventsData } from "@/data/eventsData";

export async function generateStaticParams() {
    return eventsData.map((event) => ({ slug: event.slug }));
}

export async function generateMetadata({ params }) {
    const { slug } = await params;
    const event = eventsData.find((e) => e.slug === slug);
    if (!event) return { title: "Event Not Found - Tandhan Group" };
    return { title: `${event.title} - Tandhan Group`, description: event.desc };
}

export default async function EventDetails({ params }) {
    const { slug } = await params;
    const event = eventsData.find((e) => e.slug === slug);
    if (!event) return notFound();

    return (
        <>
            <HeroBanner
                image="/images/banners/media-banner.avif"
                title={event.title}
                desc={event.date}
            />
            <BlogDetailsContent blog={event} type="events" />
        </>
    );
}
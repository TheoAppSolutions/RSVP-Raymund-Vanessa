import Link from "next/link";
import DesignShell from "@/components/MusicPlayer";
import Hero from "@/components/Hero";
import Countdown from "@/components/Countdown";
import MapSection from "@/components/MapSection";
import Gallery from "@/components/Gallery";
import Entourage from "@/components/Entourage";
import Attire from "@/components/Attire";
import Gift from "@/components/Gift";
import GoodToKnow from "@/components/GoodToKnow";

export default function Home() {
  return (
    <DesignShell>
      <main>
        <Hero variant={1} />
        <Countdown />
        <MapSection />
        <Attire />
        <Gift />
        <GoodToKnow />
        <Gallery />
        <Entourage />
        <section id="rsvp" className="scroll-mt-4 bg-dusty-100 px-6 py-20">
          <div className="mx-auto max-w-lg">
            <h2 className="mb-8 text-center font-serif text-4xl">Guest Responses</h2>
            <Link href="/admin" className="flex w-full items-center justify-center rounded-full bg-dusty-700 px-8 py-4 text-xs font-medium text-white shadow-md transition hover:-translate-y-0.5 hover:bg-dusty-800 hover:shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-dusty-300">
              Open Admin Dashboard
            </Link>
          </div>
        </section>
      </main>
    </DesignShell>
  );
}

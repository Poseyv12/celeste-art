import HeroSection from "@/components/HeroSection";
import FeaturedWorks from "@/components/FeaturedWorks";
import LatestUpdates from "@/components/LatestUpdates";

export default function Home() {
  return (
    <>
      <HeroSection />
      <div className="max-w-6xl mx-auto px-4 py-16 space-y-16">
        <FeaturedWorks />
        <LatestUpdates />
      </div>
    </>
  );
}

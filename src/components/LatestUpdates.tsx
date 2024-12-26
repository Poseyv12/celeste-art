import Image from "next/image";
import Link from "next/link";

export default function LatestUpdates() {
  return (
    <section className="grid md:grid-cols-2 gap-12 items-center bg-mint p-8 rounded-lg">
      <div className="space-y-6">
        <h2 className="text-3xl font-bold text-foreground">Latest Updates</h2>
        <div className="space-y-4">
          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="font-semibold text-foreground">Upcoming Exhibition</h3>
            <p className="text-primary">Join us for an evening of art and conversation</p>
            <p className="text-sm text-primary-light mt-1">March 15, 2024</p>
          </div>
          <div className="border-l-4 border-primary pl-4 py-2">
            <h3 className="font-semibold text-foreground">New Collection Release</h3>
            <p className="text-primary">Exploring themes of nature and urban life</p>
            <p className="text-sm text-primary-light mt-1">Coming Soon</p>
          </div>
        </div>
        <Link
          href="/blog"
          className="inline-block text-primary hover:text-primary-light font-semibold transition duration-300"
        >
          Read More Updates →
        </Link>
      </div>
      <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
        <Image
          src="/placeholder-studio.jpg"
          alt="Artist studio"
          fill
          className="object-cover"
        />
      </div>
    </section>
  );
} 
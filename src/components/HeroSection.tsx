import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  return (
    <section className="relative h-[85vh] flex items-center justify-center">
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/60 z-10" />
      <div className="relative z-20 text-center text-white space-y-6 max-w-3xl mx-auto px-4 animate-fade-in">
        <h1 className="text-5xl md:text-6xl font-bold leading-tight drop-shadow-lg">
          Welcome to My Artistic World
        </h1>
        <p className="text-xl md:text-2xl text-neutral-100 drop-shadow-md">
          Exploring creativity through various mediums
        </p>
        <div className="flex gap-4 justify-center">
          <Link
            href="/shop"
            className="bg-accent hover:bg-accent-600 text-white px-8 py-3 rounded-md transition-all duration-300 shadow-md hover:shadow-lg"
          >
            View Gallery
          </Link>
          <Link
            href="/about"
            className="bg-white/10 backdrop-blur-sm border border-white/30 text-white px-8 py-3 rounded-md hover:bg-white/20 transition-all duration-300 shadow-md hover:shadow-lg"
          >
            About Me
          </Link>
        </div>
      </div>
      <div className="absolute inset-0 -z-10">
        <Image
          src="/hero.png"
          alt="Artist studio with natural light and creative workspace"
          fill
          className="object-cover"
          priority
          quality={100}
        />
      </div>
    </section>
  );
} 
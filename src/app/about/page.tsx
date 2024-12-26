import Image from "next/image";
import Link from "next/link";

export default function About() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12 space-y-16">
      {/* Hero Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold text-foreground">
            About the Artist
          </h1>
          <p className="text-xl text-neutral-600">
            Creating meaningful connections through art and expression
          </p>
          <div className="flex gap-4">
            <Link 
              href="/shop"
              className="inline-flex items-center px-6 py-3 bg-primary hover:bg-primary-600 text-white rounded-md transition-colors duration-300"
            >
              View Gallery
            </Link>
            <Link 
              href="/contact"
              className="inline-flex items-center px-6 py-3 border border-neutral-200 hover:border-primary text-primary hover:text-primary-600 rounded-md transition-colors duration-300"
            >
              Get in Touch
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/5] rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder-studio.jpg"
            alt="Artist in studio"
            fill
            className="object-cover"
          />
        </div>
      </section>

      {/* Journey Section */}
      <section className="bg-surface-light p-8 md:p-12 rounded-xl shadow-sm">
        <h2 className="text-3xl font-bold mb-8 text-foreground">My Journey</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="space-y-4">
            <div className="text-4xl font-bold text-primary">15+</div>
            <h3 className="text-xl font-semibold text-foreground">Years of Experience</h3>
            <p className="text-neutral-600">
              Dedicated to perfecting my craft and developing a unique artistic voice
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-bold text-primary">200+</div>
            <h3 className="text-xl font-semibold text-foreground">Artworks Created</h3>
            <p className="text-neutral-600">
              Each piece telling its own story and capturing a moment in time
            </p>
          </div>
          <div className="space-y-4">
            <div className="text-4xl font-bold text-primary">50+</div>
            <h3 className="text-xl font-semibold text-foreground">Exhibitions</h3>
            <p className="text-neutral-600">
              Sharing my work with audiences around the world
            </p>
          </div>
        </div>
      </section>

      {/* Artist Statement */}
      <section className="max-w-4xl mx-auto">
        <h2 className="text-3xl font-bold mb-6 text-foreground">Artist Statement</h2>
        <div className="prose prose-lg max-w-none text-neutral-700">
          <p>
            My work explores the intersection of nature and human experience, seeking to
            capture moments of profound connection and revelation. Through a combination
            of traditional techniques and contemporary expressions, I strive to create
            pieces that resonate with viewers on an emotional level.
          </p>
          <p>
            Each artwork is a journey of discovery, where color, texture, and form come
            together to tell stories that transcend cultural and linguistic boundaries.
            I believe in the power of art to transform spaces and touch hearts, creating
            lasting impressions that inspire and provoke thought.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
          <Image
            src="/placeholder-1.jpg"
            alt="Creative process"
            fill
            className="object-cover"
          />
        </div>
        <div className="space-y-6">
          <h2 className="text-3xl font-bold text-foreground">Creative Process</h2>
          <div className="space-y-4">
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary flex-shrink-0">
                1
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Inspiration</h3>
                <p className="text-neutral-600">
                  Drawing inspiration from nature, urban landscapes, and human connections
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary flex-shrink-0">
                2
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Exploration</h3>
                <p className="text-neutral-600">
                  Experimenting with different techniques and materials
                </p>
              </div>
            </div>
            <div className="flex gap-4 items-start">
              <div className="w-8 h-8 rounded-full bg-primary-100 flex items-center justify-center text-primary flex-shrink-0">
                3
              </div>
              <div>
                <h3 className="text-xl font-semibold text-foreground mb-2">Creation</h3>
                <p className="text-neutral-600">
                  Bringing vision to life through careful attention to detail
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
} 
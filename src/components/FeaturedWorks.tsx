import Image from "next/image";
import Link from "next/link";

export default function FeaturedWorks() {
  return (
    <section className="space-y-8 bg-surface-light p-8 md:p-12 rounded-xl shadow-sm">
      <div className="text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">Featured Works</h2>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Discover my latest creations and artistic expressions
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
        {[1, 2, 3].map((item) => (
          <div
            key={item}
            className="group relative aspect-square overflow-hidden rounded-lg bg-white shadow-md hover:shadow-lg transition-all duration-300"
          >
            <Image
              src={`/placeholder-${item}.jpg`}
              alt={`Artwork ${item}`}
              fill
              className="object-cover transition duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300">
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                <h3 className="text-xl font-semibold mb-2 text-white">Artwork Title</h3>
                <p className="text-neutral-200 text-sm mb-3">Medium • Year</p>
                <Link
                  href={`/shop/artwork-${item}`}
                  className="inline-flex items-center text-sm text-white hover:text-accent-light transition-colors"
                >
                  View Details
                  <svg 
                    className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      strokeWidth={2} 
                      d="M9 5l7 7-7 7" 
                    />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center pt-4">
        <Link
          href="/shop"
          className="inline-flex items-center px-8 py-3 bg-primary hover:bg-primary-600 text-white font-medium rounded-md transition-all duration-300 shadow-sm hover:shadow group"
        >
          View All Works
          <svg 
            className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" 
            fill="none" 
            viewBox="0 0 24 24" 
            stroke="currentColor"
          >
            <path 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              strokeWidth={2} 
              d="M17 8l4 4m0 0l-4 4m4-4H3" 
            />
          </svg>
        </Link>
      </div>
    </section>
  );
} 
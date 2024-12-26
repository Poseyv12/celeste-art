import Image from "next/image";

export default function Shop() {
  return (
    <div className="max-w-7xl mx-auto px-4 py-12">
      {/* Header Section */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">Art Shop</h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Browse and collect original artworks, each piece telling its own unique story
        </p>
      </section>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Filters Sidebar */}
        <aside className="lg:w-64 flex-shrink-0">
          <div className="sticky top-4 space-y-6 bg-surface-light p-6 rounded-lg shadow-sm">
            <div>
              <h2 className="text-lg font-semibold text-foreground mb-4">Categories</h2>
              <div className="space-y-2">
                {['Paintings', 'Digital Art', 'Photography', 'Sculptures'].map((category) => (
                  <label key={category} className="flex items-center">
                    <input
                      type="checkbox"
                      className="w-4 h-4 rounded border-neutral-300 text-primary focus:ring-primary"
                    />
                    <span className="ml-2 text-neutral-700">{category}</span>
                  </label>
                ))}
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Price Range</h2>
              <div className="flex gap-4">
                <input
                  type="number"
                  placeholder="Min"
                  className="w-full px-3 py-2 rounded border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
                <input
                  type="number"
                  placeholder="Max"
                  className="w-full px-3 py-2 rounded border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none"
                />
              </div>
            </div>

            <div className="border-t border-neutral-200 pt-6">
              <h2 className="text-lg font-semibold text-foreground mb-4">Sort By</h2>
              <select className="w-full px-3 py-2 rounded border border-neutral-200 focus:border-primary focus:ring-1 focus:ring-primary focus:outline-none">
                <option>Newest First</option>
                <option>Price: Low to High</option>
                <option>Price: High to Low</option>
                <option>Most Popular</option>
              </select>
            </div>
          </div>
        </aside>

        {/* Product Grid */}
        <div className="flex-1">
          <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
            {[1, 2, 3, 4, 5, 6].map((item) => (
              <div 
                key={item}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  <Image
                    src={`/placeholder-${(item % 3) + 1}.jpg`}
                    alt={`Artwork ${item}`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-4">
                  <div className="flex justify-between items-start mb-2">
                    <h3 className="text-lg font-semibold text-foreground">
                      Artwork Title {item}
                    </h3>
                    <span className="px-2 py-1 bg-surface text-sm rounded-full text-primary-600">
                      Available
                    </span>
                  </div>
                  <p className="text-neutral-600 text-sm mb-3">Medium • Size • Year</p>
                  <div className="flex justify-between items-center">
                    <span className="text-lg font-semibold text-foreground">$299.99</span>
                    <button className="px-4 py-2 bg-primary hover:bg-primary-600 text-white rounded transition-colors duration-300">
                      Add to Cart
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Pagination */}
          <div className="mt-12 flex justify-center gap-2">
            {[1, 2, 3].map((page) => (
              <button
                key={page}
                className={`px-4 py-2 rounded ${
                  page === 1
                    ? 'bg-primary text-white'
                    : 'bg-surface hover:bg-surface-dark text-neutral-700'
                } transition-colors duration-300`}
              >
                {page}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
} 
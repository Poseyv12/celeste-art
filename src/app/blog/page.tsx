import Image from "next/image";
import Link from "next/link";

const categories = [
  { name: 'All', count: 12 },
  { name: 'Techniques', count: 4 },
  { name: 'Inspiration', count: 3 },
  { name: 'Exhibitions', count: 2 },
  { name: 'Behind the Scenes', count: 3 },
];

export default function Blog() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-12">
      {/* Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
          Art Blog
        </h1>
        <p className="text-neutral-600 max-w-2xl mx-auto">
          Insights into my creative process, upcoming exhibitions, and artistic journey
        </p>
      </section>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Main Content */}
        <div className="lg:w-3/4">
          {/* Featured Post */}
          <div className="mb-12">
            <article className="group bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300">
              <div className="relative aspect-[2/1] overflow-hidden">
                <Image
                  src="/placeholder-studio.jpg"
                  alt="Featured blog post"
                  fill
                  className="object-cover transition duration-300 group-hover:scale-105"
                />
              </div>
              <div className="p-6 space-y-4">
                <div className="flex items-center gap-4 text-sm text-neutral-600">
                  <span className="px-3 py-1 bg-primary-50 text-primary rounded-full">
                    Featured
                  </span>
                  <time>March 15, 2024</time>
                  <span>5 min read</span>
                </div>
                <h2 className="text-2xl font-bold text-foreground group-hover:text-primary transition-colors">
                  <Link href="/blog/featured-post">
                    The Evolution of Contemporary Art in the Digital Age
                  </Link>
                </h2>
                <p className="text-neutral-600">
                  Exploring how digital technologies are reshaping the landscape of contemporary art and opening new possibilities for artists...
                </p>
                <div className="flex items-center gap-4">
                  <Link 
                    href="/blog/featured-post"
                    className="text-primary hover:text-primary-600 font-medium inline-flex items-center transition-colors"
                  >
                    Read More
                    <svg className="w-4 h-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                  </Link>
                </div>
              </div>
            </article>
          </div>

          {/* Regular Posts Grid */}
          <div className="grid md:grid-cols-2 gap-6">
            {[1, 2, 3, 4].map((post) => (
              <article 
                key={post}
                className="group bg-white rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
              >
                <div className="relative aspect-[3/2] overflow-hidden">
                  <Image
                    src={`/placeholder-${(post % 3) + 1}.jpg`}
                    alt={`Blog post ${post}`}
                    fill
                    className="object-cover transition duration-300 group-hover:scale-105"
                  />
                </div>
                <div className="p-6 space-y-3">
                  <div className="flex items-center gap-3 text-sm text-neutral-600">
                    <time>March {post}, 2024</time>
                    <span>•</span>
                    <span>3 min read</span>
                  </div>
                  <h2 className="text-xl font-bold text-foreground group-hover:text-primary transition-colors">
                    <Link href={`/blog/post-${post}`}>
                      Exploring New Artistic Techniques
                    </Link>
                  </h2>
                  <p className="text-neutral-600 line-clamp-2">
                    Discovering innovative approaches to traditional mediums and pushing creative boundaries...
                  </p>
                </div>
              </article>
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

        {/* Sidebar */}
        <aside className="lg:w-1/4">
          <div className="sticky top-4 space-y-8">
            {/* Categories */}
            <div className="bg-surface-light p-6 rounded-lg shadow-sm">
              <h2 className="text-lg font-semibold text-foreground mb-4">Categories</h2>
              <div className="space-y-2">
                {categories.map((category) => (
                  <button
                    key={category.name}
                    className="flex items-center justify-between w-full px-3 py-2 rounded hover:bg-surface text-neutral-700 hover:text-primary transition-colors"
                  >
                    <span>{category.name}</span>
                    <span className="text-sm bg-surface px-2 py-1 rounded-full">
                      {category.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Newsletter */}
            <div className="bg-primary p-6 rounded-lg text-white">
              <h2 className="text-lg font-semibold mb-4">Stay Updated</h2>
              <p className="text-primary-100 mb-4">
                Subscribe to receive the latest articles and updates
              </p>
              <form className="space-y-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full px-4 py-2 rounded bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-white/50"
                />
                <button
                  type="submit"
                  className="w-full bg-white text-primary hover:bg-primary-50 px-4 py-2 rounded transition-colors duration-300"
                >
                  Subscribe
                </button>
              </form>
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
} 
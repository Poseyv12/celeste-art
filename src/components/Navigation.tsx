'use client';

import Link from 'next/link';

export default function Navigation() {
  return (
    <header className="w-full bg-white">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold text-foreground">
          Celeste Art
        </Link>
        <nav>
          <ul className="flex gap-8">
            <li>
              <Link href="/" className="text-foreground hover:text-primary transition-colors">
                Home
              </Link>
            </li>
            <li>
              <Link href="/shop" className="text-foreground hover:text-primary transition-colors">
                Shop
              </Link>
            </li>
            <li>
              <Link href="/about" className="text-foreground hover:text-primary transition-colors">
                About
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-foreground hover:text-primary transition-colors">
                Blog
              </Link>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
} 
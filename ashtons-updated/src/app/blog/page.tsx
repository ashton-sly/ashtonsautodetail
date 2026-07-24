import type { Metadata } from "next";
import Link from "next/link";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import { getAllPosts } from "@/lib/blog";
import { SITE_CONFIG } from "@/lib/config";

export const metadata: Metadata = {
  title: "Car Detailing Tips & Local Guides",
  description:
    "Tips, guides, and local know-how on car detailing in Duncan, BC and the Cowichan Valley — from Ashton's Auto Detailing.",
  alternates: {
    canonical: "https://ashtonsautodetail.ca/blog/",
  },
};

export default function BlogIndexPage() {
  const posts = getAllPosts();

  return (
    <>
      <Header />
      <main className="pt-[100px] pb-24 min-h-screen bg-cream">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="mb-12 text-center">
            <h1 className="font-display text-4xl md:text-5xl font-bold text-charcoal-900 mb-4">
              Detailing Tips &amp; Local Guides
            </h1>
            <p className="text-charcoal-900/70 max-w-2xl mx-auto">
              Practical advice on keeping your car looking its best in Duncan and the Cowichan Valley, from the team at {SITE_CONFIG.name}.
            </p>
          </div>

          <div className="grid grid-cols-1 gap-8">
            {posts.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}/`}
                className="block bg-white border border-charcoal-900/10 rounded-sm p-6 md:p-8 hover:border-bronze/50 transition-colors group"
              >
                <span className="text-xs uppercase tracking-widest text-bronze font-semibold">
                  {post.category.replace("-", " ")}
                </span>
                <h2 className="font-display text-xl md:text-2xl font-semibold text-charcoal-900 mt-2 mb-3 group-hover:text-bronze transition-colors">
                  {post.title}
                </h2>
                <p className="text-charcoal-900/70 mb-3">{post.excerpt}</p>
                <time className="text-xs text-charcoal-900/50" dateTime={post.date}>
                  {new Date(post.date).toLocaleDateString("en-CA", {
                    year: "numeric",
                    month: "long",
                    day: "numeric",
                  })}
                </time>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}

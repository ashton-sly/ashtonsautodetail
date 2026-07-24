import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Header from "@/components/layout/Header";
import Footer from "@/components/layout/Footer";
import BlogContent from "@/components/blog/BlogContent";
import { getAllPosts, getAllSlugs, getPostBySlug } from "@/lib/blog";
import { SITE_CONFIG } from "@/lib/config";

export function generateStaticParams() {
  return getAllSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return {};

  const url = `https://ashtonsautodetail.ca/blog/${post.slug}/`;

  return {
    title: post.title,
    description: post.metaDescription,
    keywords: post.keywords,
    alternates: { canonical: url },
    openGraph: {
      type: "article",
      title: post.title,
      description: post.metaDescription,
      url,
      publishedTime: post.date,
    },
    twitter: {
      card: "summary_large_image",
      title: post.title,
      description: post.metaDescription,
    },
  };
}

export default async function BlogPostPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) notFound();

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: {
      "@type": "Person",
      name: "Ashton",
    },
    publisher: {
      "@type": "Organization",
      name: SITE_CONFIG.name,
      logo: {
        "@type": "ImageObject",
        url: `${SITE_CONFIG.domain}/logo.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `https://ashtonsautodetail.ca/blog/${post.slug}/`,
    },
  };

  return (
    <>
      <Header />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }}
      />
      <main className="pt-[100px] pb-24 min-h-screen bg-cream">
        <article className="container-custom max-w-3xl mx-auto">
          <Link href="/blog/" className="text-sm text-bronze hover:underline mb-6 inline-block">
            &larr; Back to all posts
          </Link>
          <span className="text-xs uppercase tracking-widest text-bronze font-semibold block mb-2">
            {post.category.replace("-", " ")}
          </span>
          <h1 className="font-display text-3xl md:text-4xl font-bold text-charcoal-900 mb-4">
            {post.title}
          </h1>
          <time className="text-sm text-charcoal-900/50 block mb-10" dateTime={post.date}>
            {new Date(post.date).toLocaleDateString("en-CA", {
              year: "numeric",
              month: "long",
              day: "numeric",
            })}
          </time>

          <BlogContent blocks={post.content} />

          <div className="mt-12 p-6 bg-white border border-charcoal-900/10 rounded-sm text-center">
            <p className="font-display text-lg font-semibold text-charcoal-900 mb-2">
              Ready to book your detail?
            </p>
            <p className="text-charcoal-900/70 mb-4 text-sm">
              Serving Duncan and the entire Cowichan Valley. We come to you.
            </p>
            <a href={SITE_CONFIG.phoneHref} className="btn-primary inline-block px-6 py-2.5">
              Call {SITE_CONFIG.phone}
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}

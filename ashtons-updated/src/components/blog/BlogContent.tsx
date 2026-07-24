import type { BlogBlock } from "@/lib/blog";

export default function BlogContent({ blocks }: { blocks: BlogBlock[] }) {
  return (
    <div className="prose-blog max-w-none">
      {blocks.map((block, i) => {
        if (block.type === "h2") {
          return (
            <h2 key={i} className="font-display text-2xl font-semibold text-charcoal-900 mt-10 mb-4">
              {block.text}
            </h2>
          );
        }
        if (block.type === "list") {
          return (
            <ul key={i} className="list-disc pl-6 space-y-2 mb-6 text-charcoal-900/80">
              {block.items.map((item, j) => (
                <li key={j}>{item}</li>
              ))}
            </ul>
          );
        }
        return (
          <p key={i} className="mb-5 leading-relaxed text-charcoal-900/80">
            {block.text}
          </p>
        );
      })}
    </div>
  );
}

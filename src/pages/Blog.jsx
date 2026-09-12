import React from "react";

const posts = [
  {
    id: "n1",
    date: "Jun 2026",
    title: "The Past Is Our Present: A History of America’s Complicated Relationship with Science",
    excerpt:
      "A piece I wrote along with some of my peers at the Scientist Network for Advancing Policy (SNAP).",
    read: "7 min",
    tag: "Science Policy",
    link: "https://medium.com/science-policy-in-a-snap/the-past-is-our-present-a-history-of-americas-complicated-relationship-with-science-ca1d22f77fff",
  },
  // {
  //   id: "n2",
  //   date: "Jul 2026",
  //   title: "The tendon that learns",
  //   excerpt:
  //     "Tendons adapt to load within days, not weeks. I argue we should stop calling them passive structures and start treating them as slow, mechanical learners.",
  //   read: "5 min",
  //   tag: "Tissue Mechanics",
  // },
  // {
  //   id: "n3",
  //   date: "Jun 2026",
  //   title: "Climbing taught me to read bone",
  //   excerpt:
  //     "Years on rock made me notice how micro-fractures heal into stronger architecture. The wall was, improbably, my first biomechanics textbook.",
  //   read: "7 min",
  //   tag: "Field Notes",
  // },
  // {
  //   id: "n4",
  //   date: "May 2026",
  //   title: "On drawing what you study",
  //   excerpt:
  //     "Sketching a trabecular network forces you to see its branching logic. A small case for keeping a pencil next to the microscope.",
  //   read: "4 min",
  //   tag: "Method",
  // },
];

export default function Blog() {
  return (
    <div className="px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto py-10 md:py-16">
        <div className="mb-16 max-w-3xl">
          <p className="font-mono text-[15px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
            <span className="text-pop">02</span> · Field Notes
          </p>
          <h1 className="font-display font-light text-balance leading-[1] md:whitespace-nowrap text-[clamp(2.25rem,5vw,4rem)]">
            Thoughts from the <span className="italic text-pop">in-between</span>.
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            A log of my thoughts about my work, my art, and all the exciting places that they overlap.
            Written for scientists and curious non-scientists alike.
          </p>
        </div>

        <div className="max-w-3xl divide-y divide-border">
          {posts.map((post, i) => (
            <article key={post.id} className="py-8 first:pt-0 last:pb-0">
              <div className="flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                <span className="text-pop">{String(i + 1).padStart(2, "0")}</span>
                <span>{post.tag}</span>
                <span className="h-px flex-1 bg-border" />
                <span>{post.date} · {post.read}</span>
              </div>
              <h2 className="font-display text-2xl md:text-3xl leading-tight mb-4 text-balance hover:text-pop transition-colors cursor-pointer">
                {post.title}
              </h2>
              <p className="text-muted-foreground leading-relaxed">{post.excerpt}</p>
              <a
                href={post.link}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 mt-5 text-sm font-medium hover:text-pop transition-colors"
              >
                Continue reading →
              </a>
            </article>
          ))}
        </div>
      </div>
    </div>
  );
}

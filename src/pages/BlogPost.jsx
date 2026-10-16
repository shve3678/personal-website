import React from "react";
import { Link, useParams } from "react-router-dom";
import { posts } from "@/data/posts";

export default function BlogPost() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === id);

  if (!post) {
    return (
      <div className="px-6 md:px-10">
        <div className="max-w-3xl mx-auto py-16">
          <p className="mb-4">Post not found.</p>
          <Link to="/blog" className="text-pop hover:underline">← Back to Field Notes</Link>
        </div>
      </div>
    );
  }

  return (
    <div className="px-6 md:px-10">
      <div className="max-w-3xl mx-auto py-10 md:py-16">
        <Link to="/blog" className="text-sm text-muted-foreground hover:text-pop transition-colors">
          ← Back to Field Notes
        </Link>

        <div className="mt-8 flex items-center gap-4 font-mono text-xs uppercase tracking-widest text-muted-foreground">
          <span className="text-pop">{post.tag}</span>
          <span>{post.date} · {post.read}</span>
        </div>

        <h1 className="mt-4 font-display font-light text-balance leading-[1.05] text-[clamp(2rem,4.5vw,3.5rem)]">
          {post.title}
        </h1>

        <div className="mt-8 space-y-5 text-muted-foreground leading-relaxed">
          {post.body.map((para, i) => (
            <p key={i}>{para}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

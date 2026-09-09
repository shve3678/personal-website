import React from "react";
import { Link } from "react-router-dom";
import { Image } from "@/components/ui/image";

const heroImg = "https://media.base44.com/images/public/6a93b4451072c5408a05d178/42cb17c6e_generated_image.png";

const facets = [
  {
    label: "Research",
    to: "/research",
    tag: "Science",
    desc: "Musculoskeletal mechanobiology — how physical forces shape bone, tendon, and muscle tissue.",
    accent: "text-pop",
  },
  {
    label: "Field Notes",
    to: "/blog",
    tag: "Writing",
    desc: "Reflections on science, movement, and the strange overlap between them.",
    accent: "text-bark",
  },
  {
    label: "Creative",
    to: "/creative",
    tag: "Hobbies",
    desc: "Bharatanatyam, sketching, and rock climbing — the practices that keep me curious.",
    accent: "text-moss",
  },
];

export default function Home() {
  return (
    <div className="px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto">
        {/* hero */}
        <section className="pt-10 md:pt-16 pb-20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <p className="font-mono text-[15px] uppercase tracking-[0.2em] text-muted-foreground mb-6 flex items-center gap-2">
                <span className="flex gap-1">
                  <span className="text-moss">●</span>
                  <span className="text-sea">●</span>
                  <span className="text-pop">●</span>
                </span>
                Researcher · Dancer · Maker
              </p>
              <h1 className="font-display font-light text-balance leading-[0.95] text-[clamp(2.75rem,7vw,5.5rem)]">
                Where bone meets
                <br />
                <span className="italic text-pop">movement</span>.
              </h1>
              <p className="mt-8 max-w-md text-muted-foreground leading-relaxed text-[1.05rem]">
                I study how mechanical forces shape musculoskeletal tissue — and, away from the
                bench, I move, draw, and climb. Two lives, one curiosity.
              </p>
              <div className="mt-10 flex flex-wrap gap-3">
                <Link
                  to="/research"
                  className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity"
                >
                  View research →
                </Link>
                <Link
                  to="/creative"
                  className="inline-flex items-center gap-2 border border-border px-6 py-3 rounded-full text-sm font-medium hover:border-pop hover:text-pop transition-colors"
                >
                  See creative work
                </Link>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                <Image
                  src={heroImg}
                  alt="Still life of scientific and creative tools on a linen surface"
                  fittingType="fill"
                  className="absolute inset-0 h-full w-full object-cover"
                />
              </div>
            </div>
          </div>
        </section>

        {/* facets */}
        <section className="py-16 border-t border-border">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {facets.map((f) => (
              <Link
                key={f.to}
                to={f.to}
                className="group block p-8 rounded-2xl bg-card border border-border hover:border-pop transition-colors"
              >
                <p className={`font-mono text-xs uppercase tracking-widest mb-6 ${f.accent}`}>
                  {f.tag}
                </p>
                <h3 className="font-display text-2xl mb-3 group-hover:text-pop transition-colors">
                  {f.label} →
                </h3>
                <p className="text-muted-foreground leading-relaxed text-sm">{f.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
}

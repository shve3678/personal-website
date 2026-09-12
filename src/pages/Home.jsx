import React from "react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/headshot.jpg";

const facets = [
  {
    label: "Research",
    to: "/research",
    tag: "Science",
    desc: "Musculoskeletal mechanobiology...how physical forces shape bone, tendon, and muscle tissue.",
    accent: "text-moss",
  },
  {
    label: "Field Notes",
    to: "/blog",
    tag: "Writing",
    desc: "Reflections on science, art, and the surprisingly easy overlap between them.",
    accent: "text-moss",
  },
  {
    label: "Creative",
    to: "/creative",
    tag: "Hobbies",
    desc: "Some of the practices that keep me curious.",
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
                Hello! I'm
                <span className="text-pop">Shreya</span>.
              </h1>
              <p className="mt-8 max-w-3x1 text-muted-foreground leading-relaxed text-[1.05rem]">
                Understanding the way the world works is my passion! My background is in biomechanics and mechanobiology, studying how mechanical forces shape biology, and I'm excited about communicating that science effectively and being active in science policy to build trust in science and become more responsible scientists. Away from the
                bench, creative hobbies fuel my work. If you lead with curiosity too, let's connect!
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
                <img
                  src={heroImg}
                  alt="Shreya headshot"
                  fittingType="fill"
                  className="absolute inset-0 h-full w-full object-contain"
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

import React from "react";
import bharatanatyamImg from "@/assets/dance.png";
import sketchingImg from "@/assets/sketching.png";
import climbingImg from "@/assets/climbing.png";

const hobbies = [
  {
    id: "bharatanatyam",
    title: "Bharatanatyam",
    blurb:
      "A classical Indian dance form I've practiced for nearly 20 years. Choreography, performance, and movement influence so much of my productivity and my approach to research.",
    img: bharatanatyamImg,
    update: "Check out my latest work: a dance film exploring what it means to be classical",
    linkText: "dance film",
    linkUrl: "https://your-video-link-here.com",
    stat: "12 yrs practice",
  },
  {
    id: "sketching",
    title: "Sketching",
    blurb:
      "Mostly anatomy and architecture, in charcoal and ink. Drawing is how I slow down enough to actually see the structures I study.",
    img: sketchingImg,
    update: "Working on a series of musculoskeletal studies.",
    stat: "Daily sketchbook",
  },
  {
    id: "climbing",
    title: "Rock Climbing",
    blurb:
      "Trad and sport climbing. It's the most honest biomechanics lab I know — every route is a problem in force, friction, and fatigue, solved by your own body.",
    img: climbingImg,
    update: "Training for a multi-pitch route this autumn.",
    stat: "V6 · 5.11c",
  },
];

function renderUpdate(h) {
  if (!h.linkText || !h.linkUrl) return h.update;
  const [before, after] = h.update.split(h.linkText);
  return (
    <>
      {before}
      <a
        href={h.linkUrl}
        target="_blank"
        rel="noreferrer"
        className="underline hover:text-pop transition-colors"
      >
        {h.linkText}
      </a>
      {after}
    </>
  );
}

export default function Creative() {
  return (
    <div className="px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto py-10 md:py-16">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-[15px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
            <span className="text-pop">03</span> · Creative Interests
          </p>
          <h1 className="font-display font-light text-balance leading-[1] md:whitespace-nowrap text-[clamp(2.25rem,5vw,4rem)]">
            The practices that keep me <span className="italic text-pop">curious</span>.
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            These are entirely separate from my research — but each one quietly sharpens how I
            move, see, and think in the lab.
          </p>
        </div>

        <div className="space-y-16">
          {hobbies.map((h, i) => (
            <section
              key={h.id}
              className={`grid grid-cols-1 lg:grid-cols-12 gap-8 items-center ${
                i % 2 === 1 ? "lg:[&>*:first-child]:order-2" : ""
              }`}
            >
              <div className="lg:col-span-6">
                <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
                  <img
                    src={h.img}
                    alt={h.title}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6">
                <div className="max-w-md">
                  <div className="flex items-center gap-3 font-mono text-xs uppercase tracking-widest text-muted-foreground mb-4">
                    <span className="text-pop">{String(i + 1).padStart(2, "0")}</span>
                    <span className="h-px w-8 bg-border" />
                    <span>{h.stat}</span>
                  </div>
                  <h2 className="font-display text-3xl md:text-4xl leading-tight mb-4">{h.title}</h2>
                  <p className="text-muted-foreground leading-relaxed mb-6">{h.blurb}</p>
                  <div className="inline-flex items-center gap-2 bg-muted px-4 py-2 rounded-full text-sm">
                    <span className="h-2 w-2 rounded-full bg-pop" />
                    {renderUpdate(h)}
                  </div>
                </div>
              </div>
            </section>
          ))}
        </div>
      </div>
    </div>
  );
}

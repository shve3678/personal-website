import React, { useState } from "react";
import { Link } from "react-router-dom";
import heroImg from "@/assets/headshot.jpg";

const textCarouselData = [
  {
    heading: "Interdisciplinary problem solving",
    description: "I move comfortably between biology, engineering, computational analysis, and policy."
  },
  {
    heading: "Evidence synthesis",
    description: "My research and policy work during grad school taught me to distill large bodies of technical information into clear, actionable conclusions and recommendations."
  },
  {
    heading: "Scientific storytelling",
    description: "Communicating complex ideas is one of my biggest skills, be it through manuscripts, grants, policy memos, public talks, or K-12 outreach programs."
  },
  {
    heading: "Stakeholder engagement",
    description: "I've worked with researchers, educators, policymakers, attorneys, community organizations, and public audiences."
  },
  {
    heading: "Project ownership",
    description: "And it's not just ideas...I have led multi-year research projects and community initiatives all the way from ideation to efficient execution and output dissemination."
  },
];

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
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? textCarouselData.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === carouselData.length - 1 ? 0 : prevIndex + 1
    );
  };
  
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
                Hello! I'm{" "}
                <span className="text-pop">Shreya</span>.
              </h1>
              <p className="mt-8 max-w-3x1 text-muted-foreground leading-relaxed text-[1.05rem]">
                I'm an interdisciplinary biomedical scientist, engineer, writer, and science communicator interested in how science can improve lives both inside and outside the lab. Understanding the way the world works is my passion! My background is in biomechanics and mechanobiology, studying how mechanical forces shape biology.
                I'm eager to communicate that science effectively and remain active in science policy, ultimately to build trust in science and become more responsible scientists. Away from the bench, creative hobbies fuel my work. If you lead with curiosity too, let's connect!
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

        <section className="py-16 border-t border-border">
          <div style={{ maxWidth: '400px', margin: '20px auto', textAlign: 'center', border: '1px solid #ccc', padding: '20px', borderRadius: '8px' }}>
      
            {/* 2. Render both heading and description from the active object */}
            <div style={{ minHeight: '100px' }}>
              <h3 style={{ margin: '0 0 10px 0', fontSize: '22px', color: '#333' }}>
                {textCarouselData[currentIndex].heading}
              </h3>
              <p style={{ margin: 0, fontSize: '16px', color: '#666' }}>
                {textCarouselData[currentIndex].description}
              </p>
            </div>

            <div style={{ display: 'flex', justifyContent: 'center', gap: '10px', marginTop: '20px' }}>
              <button onClick={handlePrev}>Prev</button>
                <span>{currentIndex + 1} / {textCarouselData.length}</span>
              <button onClick={handleNext}>Next</button>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

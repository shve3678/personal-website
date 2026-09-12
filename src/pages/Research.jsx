import React, { useState } from "react";
import tissueImg from "@/assets/research.png";
import CV_URL from "@/assets/cv.pdf";

const SCHOLAR_PROFILE = "https://scholar.google.com/citations?user=GjxKj1UAAAAJ&hl=en";

const directions = [
{
  band: "bg-moss",
  title: "Aging & spaceflight-induced disuse",
  desc: "How chronic disuse, from aging or microgravity, drives bone and muscle decline, and what tissue engineering approaches we can use to solve this problem."
},
{
  band: "bg-bark",
  title: "Evolutionary biology",
  desc: "Can mechanical forces alone drive the way we develop biological complexity, such as multicellularity?"
},
{
  band: "bg-pop",
  title: "Performance biomechanics",
  desc: "What is the relationship between cell-level mechanobiology and tissue-level mechanics?"
}];


const projects = [
{
  id: "p1",
  title:
  "Radiation Modulates the Mechanoresponse of Bone-Homing Triple-Negative Breast Cancer Cells",
  authors: "S Venkatesh, A Ordonez, WR Thompson, EB Chuong, ME Lynch",
  field: "Cancer Mechanobiology",
  year: "2026",
  venue: "Tissue Engineering Part A",
  citations: 1,
  link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=GjxKj1UAAAAJ&citation_for_view=GjxKj1UAAAAJ:IjCSPb-OGe4C"
},
{
  id: "p2",
  title:
  "High-fidelity computational fluid dynamics modeling to simulate perfusion through a bone-mimicking scaffold",
  authors: "S Venkatesh, C Teeraratkul, N Rovito, D Mukherjee, ME Lynch",
  field: "Computational Fluid Dynamics",
  year: "2025",
  venue: "Computers in Biology and Medicine 186, 109637",
  citations: 6,
  link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=GjxKj1UAAAAJ&citation_for_view=GjxKj1UAAAAJ:d1gkVwhDpl0C"
},
{
  id: "p3",
  title:
  "Variable fluid stresses may alter breast cancer expression in a 3D perfusion model of bone metastasis",
  authors: "S Venkatesh, B Hayes, B Liu, N Bottenus, P Owens, M Lynch",
  field: "Bone Metastasis",
  year: "2024",
  venue: "Journal of Bone Oncology 45, 100554",
  citations: 0,
  link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=GjxKj1UAAAAJ&citation_for_view=GjxKj1UAAAAJ:2osOgNQ5qMEC"
},
{
  id: "p4",
  title:
  "Heat shock protein 72 supports extracellular matrix production in metastatic mammary tumors",
  authors: "BJ Lang, KM Holton, ME Guerrero-Gimenez, Y Okusha, PT Magahis, et al.",
  field: "Tumor Biology",
  year: "2024",
  venue: "Cell Stress and Chaperones 29 (3), 456-471",
  citations: 4,
  link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=GjxKj1UAAAAJ&citation_for_view=GjxKj1UAAAAJ:u-x6o8ySG0sC"
},
{
  id: "p5",
  title:
  "Meeting Schools Where They Are: Integrating Engineering Outreach Curriculum in the Classroom",
  authors: "A Hayes, V Sundaram, G Williams, S Venkatesh, C Isenhart, et al.",
  field: "Engineering Education",
  year: "2023",
  venue: "ASEE Rocky Mountain Section Conference",
  citations: 0,
  link: "https://scholar.google.com/citations?view_op=view_citation&hl=en&user=GjxKj1UAAAAJ&citation_for_view=GjxKj1UAAAAJ:u5HHmVD_uO8C"
}];


const focusAreas = [
"Tumor-induced bone disease",
"Osteocytes",
"Bone biomechanics",
"Computational fluid dynamics"];


export default function Research() {
  const [active, setActive] = useState(projects[0].id);
  const current = projects.find((p) => p.id === active);

  return (
    <div className="px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto py-10 md:py-16">
        {/* header */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 mb-16">
          <div className="lg:col-span-7">
            <p className="font-mono text-[15px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
              <span className="text-[#c93f1d]">01</span>{""}
              <span className="text-[hsl(var(--muted-foreground))]"· Research Portfolio</span>
            </p>
            <h1 className="font-display font-light text-balance leading-[1] text-[clamp(2.25rem,5vw,4rem)]">
              <span>Mechanical forces directly impact</span>{""}
              <span className="italic text-[#f7cc55]">biology</span>.
            </h1>
            {/* <p className="mt-4 font-display text-xl text-[#f7cc55]">Shreya Venkatesh</p> */}
            <p className="mt-6 max-w-lg text-muted-foreground leading-relaxed">
              During my PhD, I studied how fluid mechanical forces (shear stresses) shaped breast cancer cell behavior and thereby influenced bone destruction.
              My work spanned tumor and osteocyte mechanobiology, fluid dynamics, and transcriptomics. My research interests lie in continuing to investigate how
              mechanical forces direct biology.
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              {focusAreas.map((f) =>
              <span
                key={f}
                className="px-3 py-1.5 rounded-full bg-muted text-sm text-[hsl(var(--secondary))] [font-family:'Aether',_sans-serif] lowercase">
                
                  {f}
                </span>
              )}
            </div>
            <div className="mt-8 flex flex-col items-start gap-3">
              <a
                href={SCHOLAR_PROFILE}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 bg-foreground text-background px-5 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity">
                
                View Google Scholar profile →
              </a>
              {CV_URL ?
              <a
                href={CV_URL}
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center gap-2 border border-border px-5 py-3 rounded-full text-sm font-medium hover:border-pop hover:text-pop transition-colors">
                
                  Download CV (PDF) ↓
                </a> :

              // <span className="inline-flex items-center gap-2 border border-dashed border-border px-5 py-3 rounded-full text-sm text-muted-foreground">
              //     CV — upload pending
              //   </span>
              }
            </div>
          </div>
          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={tissueImg}
                alt="Macro view of bone and muscle tissue"
                fittingType="fill"
                className="absolute inset-0 h-full w-full object-cover" />
              
            </div>
            <div className="mt-4 grid grid-cols-3 gap-3 text-center">
              <div className="bg-card border border-border rounded-xl py-4">
                <p className="font-display text-2xl text-moss">8</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Citations
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl py-4">
                <p className="font-display text-2xl text-moss">2</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  h-index
                </p>
              </div>
              <div className="bg-card border border-border rounded-xl py-4">
                <p className="font-display text-2xl text-moss">5</p>
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Articles
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* directions */}
        <section className="mb-16">
          <p className="font-mono text-[15px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
            <span className="text-pop">→</span> Where I'm headed
          </p>
          <h2 className="font-display font-light text-2xl md:text-3xl mb-8 max-w-2xl leading-tight">
            Directions I'm interested in <span className="italic text-pop">pivoting toward</span>.
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {directions.map((d) =>
            <div key={d.title} className="p-6 rounded-2xl bg-card border border-border">
                <span className={`h-1.5 w-9 rounded-full block mb-4 ${d.band}`} />
                <h3 className="font-display text-lg mb-2 leading-tight">{d.title}</h3>
                <p className="text-sm text-muted-foreground leading-relaxed">{d.desc}</p>
              </div>
            )}
          </div>
        </section>

        {/* portfolio grid + detail */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {projects.map((p, i) =>
            <button
              key={p.id}
              onClick={() => setActive(p.id)}
              className={`text-left p-6 rounded-2xl border transition-colors ${
              active === p.id ?
              "bg-card border-pop" :
              "bg-card border-border hover:border-foreground/30"}`
              }>
              
                <div className="flex items-center justify-between mb-5">
                  <span className="font-mono text-xs text-pop">
                    {String(i + 1).padStart(2, "0")}
                  </span>
                  <span className="font-mono text-xs text-muted-foreground">{p.year}</span>
                </div>
                <h3 className="font-display text-lg leading-tight mb-3 line-clamp-3">{p.title}</h3>
                <p className="font-mono text-xs uppercase tracking-wider text-muted-foreground mb-4">
                  {p.field}
                </p>
                <div className="flex items-center gap-2 font-mono text-[13px]">
                  <span className="text-pop">●</span>
                  <span className="text-muted-foreground">{p.citations} citations</span>
                </div>
              </button>
            )}
          </div>

          {/* detail pane */}
          <div className="lg:col-span-5 bg-card border border-border rounded-2xl p-8 h-fit lg:sticky lg:top-24">
            <p className="font-mono text-[10px] uppercase tracking-widest text-pop mb-4">
              Quick View
            </p>
            <h3 className="font-display text-2xl leading-tight mb-3">{current.title}</h3>
            <p className="font-mono text-[13px] text-muted-foreground mb-2">{current.authors}</p>
            <p className="font-mono text-[13px] text-bark mb-6">
              {current.venue} · {current.year}
            </p>

            <div className="grid grid-cols-2 gap-4 mb-8">
              <div className="border-t border-border pt-3">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Citations
                </p>
                <p className="font-display text-3xl text-pop">{current.citations}</p>
              </div>
              <div className="border-t border-border pt-3">
                <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
                  Field
                </p>
                <p className="font-display text-base text-bark pt-1">{current.field}</p>
              </div>
            </div>

            <a
              href={current.link}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-2 text-sm font-medium border border-border px-5 py-3 rounded-full hover:border-pop hover:text-pop transition-colors">
              
              View on Google Scholar →
            </a>
          </div>
        </div>
      </div>
    </div>);

}

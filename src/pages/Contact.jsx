import React from "react";
import contactImg from "@/assets/contact.png";

export default function Contact() {
  const channels = [
    { label: "Email", value: "shreya@venkateshreya.com", href: "mailto:shreya@venkateshreya.com" },
    { label: "Scholar", value: "Google Scholar profile", href: "https://scholar.google.com/citations?user=GjxKj1UAAAAJ&hl=en" },
    { label: "ORCID", value: "0000-0002-2991-029X", href: "https://orcid.org/0000-0002-2991-029X" },
    { label: "Instagram", value: "@dancingshreya", href: "https://instagram.com/dancingshreya" },
  ];

  return (
    <div className="px-6 md:px-10">
      <div className="max-w-[1200px] mx-auto py-10 md:py-16">
        <div className="mb-16 max-w-2xl">
          <p className="font-mono text-[15px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
            <span className="text-pop">04</span> · Contact
          </p>
          <h1 className="font-display font-light text-balance leading-[1] text-[clamp(2.25rem,5vw,4rem)]">
            Let's <span className="italic text-pop">talk</span>.
          </h1>
          <p className="mt-6 text-muted-foreground leading-relaxed">
            For research collaborations, speaking invitations, commissions, or just to say hello!
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          <div className="lg:col-span-7 space-y-3">
            {channels.map((c) => (
              
                key={c.label}
                href={c.href}
                className="flex items-center justify-between p-5 rounded-2xl bg-card border border-border hover:border-pop transition-colors"
              >
                <div>
                  <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
                    {c.label}
                  </p>
                  <p className="font-display text-lg">{c.value}</p>
                </div>
                <span className="text-pop">→</span>
              </a>
            ))}
          </div>

          <div className="lg:col-span-5">
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden">
              <img
                src={contactImg}
                alt="Bunny sunset sketch"
                className="absolute inset-0 h-full w-full object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

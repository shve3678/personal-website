import React, { useEffect, useState } from "react";
import { Outlet, NavLink, Link } from "react-router-dom";

const tabs = [
{ label: "Research", to: "/research", bandOn: "bg-moss", bandOff: "bg-moss/30", ink: "text-moss" },
{ label: "Field Notes", to: "/blog", bandOn: "bg-bark", bandOff: "bg-bark/30", ink: "text-bark" },
{ label: "Creative", to: "/creative", bandOn: "bg-pop", bandOff: "bg-pop/30", ink: "text-pop" },
{ label: "Contact", to: "/contact", bandOn: "bg-cream", bandOff: "bg-cream/30", ink: "text-cream" }];


export default function SiteLayout() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <header
        className={`sticky top-0 z-50 transition-all duration-300 border-b border-border bg-[#b09769] ${
        scrolled ? "backdrop-blur-md" : "backdrop-blur-sm"}`
        }>
        
        <div className="max-w-[1200px] mx-auto px-4 md:px-10 h-16 flex items-end justify-between">
          <Link to="/" className="font-display text-xl tracking-tight pb-2.5">
            <span className="text-[#c93f1d]">—</span> Shreya Venkatesh, Ph.D.
          </Link>
          <nav className="flex items-end gap-1 md:gap-1.5">
            {tabs.map((t) =>
            <NavLink
              key={t.to}
              to={t.to}
              className={({ isActive }) =>
              `group relative flex flex-col items-center px-3 md:px-4 pt-2 pb-2.5 rounded-t-xl transition-all duration-300 ${
              isActive ?
              "-translate-y-1 bg-card border border-b-0 border-border shadow-[0_-3px_10px_-4px_rgba(0,0,0,0.18)]" :
              "border border-b-0 border-transparent hover:-translate-y-0.5"}`

              }>
              
                {({ isActive }) =>
              <>
                    <span
                  className={`h-1.5 w-7 md:w-9 rounded-full mb-2 transition-all ${
                  isActive ? t.bandOn : t.bandOff}`
                  } />
                
                    <span
                  className={`text-sm whitespace-nowrap ${
                  isActive ?
                  `${t.ink} font-medium` :
                  "text-muted-foreground group-hover:text-foreground"}`
                  }>
                  
                      {t.label}
                    </span>
                  </>
              }
              </NavLink>
            )}
          </nav>
        </div>
      </header>

      <main className="flex-1">
        <Outlet />
      </main>

      <footer className="mt-10">
        <div className="h-1.5 flex">
          <div className="flex-1 bg-pop" />
          <div className="flex-1 bg-bark" />
          <div className="flex-1 bg-moss" />
          <div className="flex-1 bg-cream" />
        </div>
        <div className="max-w-[1200px] mx-auto px-6 md:px-10 py-10 flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="font-display text-lg">
            Research <span className="text-pop">×</span> Rhythm
          </p>
          <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground">
            © 2026 — Built at the intersection of engineering & art
          </p>
        </div>
      </footer>
    </div>);

}

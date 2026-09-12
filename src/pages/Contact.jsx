import React from "react";

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
            For research collaborations, speaking invitations, commissions, or just to say hello —
            the door is open.
          </p>
        </div>

        <div className="max-w-lg space-y-3">
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
      </div>
    </div>
  );
}

// import React, { useState } from "react";
// import { useToast } from "@/components/ui/use-toast";

// export default function Contact() {
//   const { toast } = useToast();
//   const [form, setForm] = useState({ name: "", email: "", message: "" });
//   const [sending, setSending] = useState(false);

//   const onSubmit = (e) => {
//     e.preventDefault();
//     setSending(true);
//     setTimeout(() => {
//       setSending(false);
//       setForm({ name: "", email: "", message: "" });
//       toast({ title: "Message sent", description: "Thanks — I'll be in touch soon." });
//     }, 700);
//   };

//   const channels = [
//     { label: "Email", value: "shreya@venkateshreya.com", href: "mailto:shreya@venkateshreya.com" },
//     { label: "Scholar", value: "Google Scholar profile", href: "https://scholar.google.com/citations?user=GjxKj1UAAAAJ&hl=en" },
//     { label: "ORCID", value: "0000-0002-2991-029X", href: "https://orcid.org/0000-0002-2991-029X" },
//     { label: "Instagram", value: "@dancingshreya", href: "https://instagram.com/dancingshreya" },
//   ];

//   return (
//     <div className="px-6 md:px-10">
//       <div className="max-w-[1200px] mx-auto py-10 md:py-16">
//         <div className="mb-16 max-w-2xl">
//           <p className="font-mono text-[15px] uppercase tracking-[0.2em] text-muted-foreground mb-5">
//             <span className="text-pop">04</span> · Contact
//           </p>
//           <h1 className="font-display font-light text-balance leading-[1] text-[clamp(2.25rem,5vw,4rem)]">
//             Let's <span className="italic text-pop">talk</span>.
//           </h1>
//           <p className="mt-6 text-muted-foreground leading-relaxed">
//             For research collaborations, speaking invitations, commissions, or just to say hello —
//             the door is open.
//           </p>
//         </div>

//         <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
//           {/* form */}
//           <form onSubmit={onSubmit} className="lg:col-span-7 bg-card border border-border rounded-2xl p-8 space-y-5">
//             <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
//               <div>
//                 <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
//                   Name
//                 </label>
//                 <input
//                   required
//                   value={form.name}
//                   onChange={(e) => setForm({ ...form, name: e.target.value })}
//                   className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-pop transition-colors"
//                 />
//               </div>
//               <div>
//                 <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
//                   Email
//                 </label>
//                 <input
//                   required
//                   type="email"
//                   value={form.email}
//                   onChange={(e) => setForm({ ...form, email: e.target.value })}
//                   className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-pop transition-colors"
//                 />
//               </div>
//             </div>
//             <div>
//               <label className="block font-mono text-xs uppercase tracking-widest text-muted-foreground mb-2">
//                 Message
//               </label>
//               <textarea
//                 required
//                 rows={5}
//                 value={form.message}
//                 onChange={(e) => setForm({ ...form, message: e.target.value })}
//                 className="w-full bg-background border border-border rounded-lg px-4 py-3 focus:outline-none focus:border-pop transition-colors resize-none"
//               />
//             </div>
//             <button
//               type="submit"
//               disabled={sending}
//               className="inline-flex items-center gap-2 bg-foreground text-background px-6 py-3 rounded-full text-sm font-medium hover:opacity-90 transition-opacity disabled:opacity-50"
//             >
//               {sending ? "Sending…" : "Send message →"}
//             </button>
//           </form>

//           {/* channels */}
//           <div className="lg:col-span-5 space-y-3">
//             {channels.map((c) => (
//               <a
//                 key={c.label}
//                 href={c.href}
//                 className="flex items-center justify-between p-5 rounded-2xl bg-card border border-border hover:border-pop transition-colors"
//               >
//                 <div>
//                   <p className="font-mono text-xs uppercase tracking-widest text-muted-foreground mb-1">
//                     {c.label}
//                   </p>
//                   <p className="font-display text-lg">{c.value}</p>
//                 </div>
//                 <span className="text-pop">→</span>
//               </a>
//             ))}
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

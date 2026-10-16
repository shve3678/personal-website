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
  {
    id: "n2",
    date: "Aug 2026",
    title: "Recommendations to reduce social isolation experienced by Older Coloradans",
    excerpt: "A policy memo I wrote at the conclusion of my science & technology policy internship this summer.",
    read: "5 min",
    tag: "Aging & Community Engagement",
    body: [
      "Older Coloradans suffer from increasing social isolation. To better support our older adults with policy, we must implement a 2-tiered strategy: (1) mandate and improve screenings for social isolation in primary care practice, and (2) incentivize community engagement with older adults by allowing individuals on Medicaid to bypass hiring competitiveness for state jobs.",
      "Roughly 1 in 4 Coloradans over the age of 65 report feeling lonely or socially isolated [1]. Due to the prevalence of physical health impacts from social isolation (e.g., increased risk of heart disease, stroke, and a weakened immune system), the “loneliness epidemic” has been named a public health crisis, especially for older adults over 65 [2,3]. As our older adult population grows, it is necessary to better support these individuals experiencing this public health crisis.",
      "Currently, Colorado joins 13 other states in implementing a Multi-Sector Plan on Aging (MPA) [4]. One recent bill addressing this MPA is SB22-185, which renamed and made funding indefinitely available through the strategic investments on aging grant program. Another bill of note is HB22-1035, which expanded the Colorado Commission on Aging and put in place the Lifelong Colorado Initiative. Nevertheless, while the Colorado legislature regularly discusses bills to support older adults, very few explicitly mention or address social isolation.",
      "In particular, while recommended as best practice, loneliness screenings for older adults in Colorado are not yet widely implemented, and none as yet consider emerging technology use as part of risk factors for social isolation [5]. As emerging technologies grow, older adults have become frequent users of tools such as AI companions to combat social isolation, but we lack data and risk prevention methods related to this use at the policy-level. Intergenerational programming is another tool that is highly effective at reducing social isolation; for older adults, intergenerational contact can even positively impact cognitive aging [6,7]. Since intergenerational community programming is also known to be the most effective at building a sense of belonging and community [6,7], policy can incentivize these community-led efforts to further reduce social isolation risk amongst older adults.",
      "To address these issues, we must (1) mandate and improve loneliness screenings in primary care practice for older adults, and (2) incentivize intergenerational initiatives to reduce social isolation risk for older adults in Colorado. Recommendations below:",
      "Recommendation (1): Require the use of a loneliness screening tool (such as the Revised UCLA-3) in primary care practice for older adults above the age of 65. Additionally, these screening tools should include some measure of AI use as a data point towards measuring social isolation risk. Such a policy mandating screening would be similar in effect to the recent SB25-200 bill for dyslexia screening. Increased screenings and awareness is generally known to improve patient outcomes, thus this recommendation should be effective in better tracking and addressing the mental and physical impacts of loneliness in medical practice.",
      "Recommendation (2): Non-pregnant adults age 19 to 64 on Medicaid will be required to comply with work requirements according to H.R.1, effective January 1, 2027. These work requirements can be satisfied with at least 80 hours of volunteering to maintain coverage. To better support older adults in our communities, the legislature can incentivize community engagement by allowing these individuals to bypass hiring competitiveness for state jobs on the condition that they perform 500+ hours of volunteering with older adults while satisfying their Medicaid work requirements. They must provide documentation of volunteering through an existing non-profit organization dedicated to older adult support and engagement. Additionally, they must already meet the minimum required qualifications for the state job that they will bypass hiring competitiveness for, and the job must also involve work related to older adults in some fashion. A similar bill was implemented in Nevada for general volunteering (SB23-87). Nevada has generally seen a very low rate of volunteerism in the state. Though there were no formal evaluations of SB-87, after implementation of the bill in 2023, volunteerism rates rose.",
      "Colorado is experiencing a mental health crisis; we are currently ranked 50th in the nation for the prevalence of mental health conditions, and loneliness is a major risk factor [3]. As our older adult population increasingly experiences social isolation, and our older adult population growth rate remains one of the fastest in the country, there is an urgent need to implement better measures to support our older adults. Colorado’s MPA joins few others in implementing a data dashboard to evaluate policy and provide metrics on how MPA-related measures to support older adults are progressing. By addressing social isolation as part of these measures, Colorado will see improvement in mental and physical health for older adults.\n",
      "References: [1] Colorado State Demography Office. [2] Blazer & Donovan, Am J Geriatr Psychiatry, 2020. [3] U.S. Surgeon General Social Connection Advisory, 2023. [4] Multisector Plan for Aging, West Health. [5] Pollak+, Res Gerontol Nurs, 2025. [6] Hu+, Front Public Health, 2024. [7] Sanchez-Cazalla & Gutierrez-Domingo, Archiv Geront Geriatr Plus, 2025.",
    ],
    link: "/blog/n2",
  },
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

import { Section } from "./Section";
import { ArrowUpRight } from "lucide-react";

const posts = [
  {
    date: "Coming soon",
    category: "Story",
    title: "How a movie made me fall in love with robotics",
    excerpt: "The single scene that rerouted my entire career — and what I'd tell 12-year-old me now.",
  },
  {
    date: "Coming soon",
    category: "ROS 2",
    title: "ROS 2 for Mechanical Engineers — a beginner's journey",
    excerpt: "Notes from someone who came in via CAD and FEA, not CS. The hard parts, demystified.",
  },
  {
    date: "Coming soon",
    category: "Reflection",
    title: "What mime taught me about engineering",
    excerpt: "Silence. Precision. Iteration. The stage and the workshop are closer than you think.",
  },
  {
    date: "Coming soon",
    category: "Bonsai",
    title: "Starting bonsai: patience as a superpower",
    excerpt: "Year one with seven small trees, and the unexpected design lessons they taught me.",
  },
];

export function Blog() {
  return (
    <Section id="blog" eyebrow="writing" title="Thoughts & learnings." subtitle="Notes from the road. Fresh posts dropping soon.">
      <div className="grid md:grid-cols-2 gap-5">
        {posts.map((p) => (
          <article key={p.title} className="group glass-card rounded-2xl p-6 hover:border-primary transition cursor-pointer">
            <div className="flex items-center gap-3 mb-3 text-xs font-mono uppercase">
              <span className="text-primary">{p.category}</span>
              <span className="text-muted-foreground">·</span>
              <span className="text-muted-foreground">{p.date}</span>
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition flex items-start gap-2">
              {p.title}
              <ArrowUpRight className="w-4 h-4 mt-1 opacity-0 group-hover:opacity-100 transition" />
            </h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{p.excerpt}</p>
          </article>
        ))}
      </div>
    </Section>
  );
}

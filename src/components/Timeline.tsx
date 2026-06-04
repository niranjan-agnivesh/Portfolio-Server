import { Section } from "./Section";

const events = [
  { year: "Early Years", icon: "🏗️", title: "First builds", text: "Took apart every toy I owned. Won my first school science fair." },
  { year: "School", icon: "🎬", title: "The spark", text: "A movie scene with a robot. Locked in the robotics dream forever." },
  { year: "Senior", icon: "🏆", title: "Kalolsavam winner", text: "State Kalolsavam champion in mime performance." },
  { year: "2023", icon: "🎓", title: "Joined KTU", text: "Started B.Tech in Mechanical Engineering." },
  { year: "2024", icon: "🤖", title: "Hello, ROS 2", text: "Began the deep dive into modern robotics frameworks." },
  { year: "2025", icon: "📡", title: "NSS leadership", text: "Leading community service initiatives on campus." },
  { year: "Now", icon: "🚀", title: "Building real robots", text: "First major robotics project shipping soon." },
];

export function Timeline() {
  return (
    <Section id="journey" eyebrow="journey" title="My journey." subtitle="From taking things apart to putting intelligent ones together.">
      <div className="relative max-w-3xl mx-auto">
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary via-border to-transparent -translate-x-1/2" />
        <div className="space-y-10">
          {events.map((e, i) => (
            <div key={i} className={`relative pl-14 md:pl-0 md:grid md:grid-cols-2 md:gap-10 ${i % 2 === 0 ? "" : "md:[&>*:first-child]:order-2"}`}>
              <div className={`absolute left-4 md:left-1/2 w-3 h-3 rounded-full bg-primary -translate-x-1/2 mt-2 ring-4 ring-background glow`} />
              <div className={`glass-card rounded-2xl p-5 ${i % 2 === 0 ? "md:text-right" : ""}`}>
                <div className={`flex items-center gap-2 mb-2 ${i % 2 === 0 ? "md:justify-end" : ""}`}>
                  <span className="text-2xl">{e.icon}</span>
                  <span className="font-mono text-xs text-primary uppercase">{e.year}</span>
                </div>
                <h4 className="text-lg font-semibold mb-1">{e.title}</h4>
                <p className="text-sm text-muted-foreground">{e.text}</p>
              </div>
              <div />
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

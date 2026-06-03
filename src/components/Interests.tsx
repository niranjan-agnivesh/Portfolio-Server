import { Section } from "./Section";

const interests = [
  { icon: "🤖", title: "Robotics & ROS 2", text: "Simulating, planning, occasionally breaking things." },
  { icon: "🌿", title: "Bonsai", text: "Seven trees, one slow lesson at a time." },
  { icon: "🎭", title: "Mime", text: "Stories without a single spoken word." },
  { icon: "⛸️", title: "Skating", text: "Speed, balance, falling well." },
  { icon: "🏸", title: "Sepak Takraw", text: "Foot-volleyball with style." },
  { icon: "🎬", title: "Movies", text: "The medium that started it all." },
  { icon: "📚", title: "Teaching", text: "Best way to learn is to teach." },
  { icon: "🛠️", title: "Making", text: "If it can be built, why buy it?" },
];

export function Interests() {
  return (
    <Section id="interests" eyebrow="off-hours" title="Beyond the workbench.">
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {interests.map((i) => (
          <div key={i.title} className="glass-card rounded-2xl p-6 hover:-translate-y-1 hover:border-primary transition-all duration-300">
            <div className="text-4xl mb-3">{i.icon}</div>
            <h4 className="font-semibold mb-1">{i.title}</h4>
            <p className="text-sm text-muted-foreground">{i.text}</p>
          </div>
        ))}
      </div>
    </Section>
  );
}

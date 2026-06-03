import { Section } from "./Section";
import { Wrench, Bot, Cpu, Palette } from "lucide-react";

const groups = [
  {
    icon: Wrench,
    title: "Mechanical & Design",
    color: "from-emerald-400/20 to-teal-400/10",
    skills: ["SolidWorks", "ANSYS / FEA", "Machine Design", "Heat & Mass Transfer", "Engineering Drawing"],
  },
  {
    icon: Bot,
    title: "Robotics & Software",
    color: "from-cyan-400/20 to-blue-400/10",
    skills: ["ROS 2 (Humble)", "Python", "Linux / Ubuntu", "Gazebo", "URDF Modeling", "Computer Vision"],
  },
  {
    icon: Cpu,
    title: "Embedded Systems",
    color: "from-sky-400/20 to-indigo-400/10",
    skills: ["Arduino", "Sensor Integration", "Circuit Design", "Real-time Control"],
  },
  {
    icon: Palette,
    title: "Creative & Soft",
    color: "from-teal-400/20 to-emerald-400/10",
    skills: ["Mime Performance", "Teaching", "Content Creation", "NSS Leadership", "Bonsai / Plant Care"],
  },
];

export function Skills() {
  return (
    <Section id="skills" eyebrow="skills" title="What I do." subtitle="A toolkit built across engineering benches, stages, and gardens.">
      <div className="grid md:grid-cols-2 gap-5">
        {groups.map((g) => (
          <div key={g.title} className={`glass-card rounded-2xl p-6 bg-gradient-to-br ${g.color}`}>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-11 h-11 rounded-xl bg-primary/15 text-primary flex items-center justify-center">
                <g.icon className="w-5 h-5" />
              </div>
              <h3 className="text-xl font-semibold">{g.title}</h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {g.skills.map((s) => (
                <span
                  key={s}
                  className="px-3 py-1.5 text-sm rounded-full bg-background/60 border border-border text-foreground/90 hover:border-primary hover:text-primary transition"
                >
                  {s}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </Section>
  );
}

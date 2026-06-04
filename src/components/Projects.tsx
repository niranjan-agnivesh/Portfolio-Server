import { useState } from "react";
import { Section } from "./Section";
import { Github, ExternalLink, Lock } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tags: string[];
  category: string;
  status: "live" | "soon";
  github?: string;
};

const projects: Project[] = [
  {
    title: "Acoustic Fire EXtinguisher Robot",
    description: "Arduino-based robot for detecting and extinguishing fires using acoustic sensors.",
    tags: ["Arduino", "C++", "PID", "Sensors"],
    category: "Robotics",
    status: "live",
    github: "https://github.com/niranjan-agnivesh/Automatic-Urban-Response-and-Assistance.git",
  },
  { title: "6-DOF Robotic Arm (ROS 2)", description: "Coming soon — URDF model, MoveIt planning, Gazebo simulation, and pick-and-place demo.", tags: ["ROS 2", "Python", "Gazebo"], category: "Robotics", status: "soon" },
  { title: "Parametric Bicycle Frame", description: "Coming soon — SolidWorks parametric CAD model with FEA stress analysis under rider load.", tags: ["SolidWorks", "ANSYS"], category: "CAD", status: "soon" },
  { title: "Smart Bonsai Monitor", description: "Coming soon — ESP32-based soil moisture, light, and temperature monitor with mobile dashboard.", tags: ["ESP32", "IoT"], category: "Embedded", status: "soon" },
  { title: "Heat Exchanger Optimizer", description: "Coming soon — Python tool for shell-and-tube heat exchanger sizing and pressure-drop analysis.", tags: ["Python", "NumPy"], category: "Software", status: "soon" },
  { title: "Mime Performance Tracker", description: "Coming soon — Web app to log performances, score routines, and track student progress.", tags: ["Web", "TypeScript"], category: "Software", status: "soon" },
];

const filters = ["All", "Robotics", "Mechanical", "Embedded", "Software", "CAD"];

export function Projects() {
  const [active, setActive] = useState("All");
  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active);

  return (
    <Section id="projects" eyebrow="projects" title="Things I've built (and am building)." subtitle="A growing collection. New work ships often.">
      <div className="flex flex-wrap gap-2 mb-8">
        {filters.map((f) => (
          <button
            key={f}
            onClick={() => setActive(f)}
            className={`px-4 py-2 rounded-full text-sm font-medium transition border ${
              active === f
                ? "bg-primary text-primary-foreground border-primary"
                : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/40"
            }`}
          >
            {f}
          </button>
        ))}
      </div>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
        {filtered.map((p) => (
          <article
            key={p.title}
            className="group glass-card rounded-2xl p-6 flex flex-col hover:-translate-y-1 hover:border-primary transition-all duration-300"
          >
            <div className="flex items-center justify-between mb-4">
              <span className="text-xs font-mono uppercase tracking-wider text-primary">{p.category}</span>
              {p.status === "soon" && (
                <span className="inline-flex items-center gap-1 text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
                  <Lock className="w-3 h-3" /> Coming soon
                </span>
              )}
              {p.status === "live" && (
                <span className="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-full bg-primary/15 text-primary">
                  <span className="w-1.5 h-1.5 rounded-full bg-primary animate-pulse" /> Live
                </span>
              )}
            </div>
            <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition">{p.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed mb-5 flex-1">{p.description}</p>
            <div className="flex flex-wrap gap-1.5 mb-5">
              {p.tags.map((t) => (
                <span key={t} className="text-xs font-mono px-2 py-1 rounded bg-background/60 border border-border">{t}</span>
              ))}
            </div>
            <div className="flex items-center gap-4 text-sm pt-4 border-t border-border">
              {p.github ? (
                <a href={p.github} className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-primary">
                  <Github className="w-4 h-4" /> Code
                </a>
              ) : (
                <span className="inline-flex items-center gap-1.5 text-muted-foreground/50"><Github className="w-4 h-4" /> Code</span>
              )}
              <span className="inline-flex items-center gap-1.5 text-muted-foreground/50"><ExternalLink className="w-4 h-4" /> Details</span>
            </div>
          </article>
        ))}
      </div>
    </Section>
  );
}

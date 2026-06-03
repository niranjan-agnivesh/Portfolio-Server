import { useEffect, useState } from "react";
import { ArrowRight, Download, Github, Linkedin, Mail } from "lucide-react";
import portrait from "@/assets/niranjan-portrait.jpg";
import heroBg from "@/assets/hero-bg.jpg";

const roles = [
  "Mechanical Engineer",
  "Robotics Enthusiast",
  "Mime Artist",
  "Bonsai Grower",
  "Carpe Diem 🌿",
];

export function Hero() {
  const [text, setText] = useState("");
  const [roleIdx, setRoleIdx] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = roles[roleIdx];
    const speed = deleting ? 40 : 90;
    const t = setTimeout(() => {
      if (!deleting && text === current) {
        setTimeout(() => setDeleting(true), 1400);
        return;
      }
      if (deleting && text === "") {
        setDeleting(false);
        setRoleIdx((i) => (i + 1) % roles.length);
        return;
      }
      setText(deleting ? current.slice(0, text.length - 1) : current.slice(0, text.length + 1));
    }, speed);
    return () => clearTimeout(t);
  }, [text, deleting, roleIdx]);

  return (
    <section id="home" className="relative min-h-screen flex items-center pt-24 pb-16 overflow-hidden">
      <img
        src={heroBg}
        alt=""
        width={1920}
        height={1080}
        className="absolute inset-0 w-full h-full object-cover opacity-40 -z-10"
      />
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-background/60 to-background" />

      <div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-[1.2fr_1fr] gap-12 items-center w-full">
        <div className="animate-fade-up">
          <p className="font-mono text-sm text-primary mb-4">$ whoami</p>
          <h1 className="text-5xl md:text-7xl font-bold leading-[1.05] mb-6">
            Hello, I'm <br />
            <span className="text-gradient">Niranjan.</span>
          </h1>
          <div className="text-2xl md:text-3xl font-display text-muted-foreground mb-6 min-h-[2.5rem]">
            <span className="caret">{text}</span>
          </div>
          <p className="text-lg text-muted-foreground max-w-xl mb-8 leading-relaxed">
            Building intelligent machines by day, growing bonsai by night.
            A B.Tech Mechanical Engineer from Kerala, in love with robotics, mime, and the art of seizing the day.
          </p>
          <div className="flex flex-wrap gap-3 mb-8">
            <a
              href="#projects"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow"
            >
              View Projects <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg border border-border hover:border-primary hover:text-primary transition"
            >
              <Download className="w-4 h-4" /> Download Resume
            </a>
          </div>
          <div className="flex items-center gap-4 text-muted-foreground">
            <a href="https://github.com" aria-label="GitHub" className="hover:text-primary transition"><Github className="w-5 h-5" /></a>
            <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-primary transition"><Linkedin className="w-5 h-5" /></a>
            <a href="mailto:hello@niranjan.dev" aria-label="Email" className="hover:text-primary transition"><Mail className="w-5 h-5" /></a>
            <span className="text-xs font-mono ml-2">Kerala, India 🇮🇳</span>
          </div>
        </div>

        <div className="relative animate-fade-up" style={{ animationDelay: "0.2s" }}>
          <div className="relative w-full max-w-md mx-auto animate-float">
            <div className="absolute -inset-4 bg-gradient-to-tr from-primary/30 to-accent/30 blur-3xl rounded-full" />
            <div className="relative aspect-square rounded-3xl overflow-hidden glass-card glow">
              <img src={portrait} alt="Niranjan portrait" width={896} height={1088} className="w-full h-full object-cover" />
            </div>
            <div className="absolute -bottom-4 -right-4 glass-card rounded-2xl px-4 py-3 font-mono text-xs">
              <span className="text-primary">●</span> Currently building robots
            </div>
            <div className="absolute -top-4 -left-4 glass-card rounded-2xl px-4 py-3 font-serif italic text-sm">
              "Carpe Diem" 🌿
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

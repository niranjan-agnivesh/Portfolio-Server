import { Section } from "./Section";
import { MapPin, GraduationCap, Sparkles, Download } from "lucide-react";

export function About() {
  return (
    <Section id="about" eyebrow="about me" title="The story behind the engineer.">
      <div className="grid lg:grid-cols-3 gap-6">
        <div className="lg:col-span-2 glass-card rounded-2xl p-8 space-y-5 leading-relaxed text-muted-foreground">
          <p>
            I grew up taking things apart just to figure out how they worked — much to my parents'
            amusement (and occasional horror). Somewhere between winning school science fairs and
            district-level competitions, I discovered I didn't just like building things, I needed to.
          </p>
          <p>
            <span className="text-foreground font-medium">The spark moment?</span> A movie. One scene
            with a robot, and that was it — the dream of designing intelligent machines locked in.
            Today I'm pursuing B.Tech in Mechanical Engineering at KTU, teaching myself
            ROS 2, and inching closer to becoming a mechatronics engineer.
          </p>
          <p>
            Outside the lab, I'm a <span className="text-primary">state Kalolsavam-winning mime artist</span>,
            a part-time mime instructor, a state-level skater & sepak takraw player, and a slightly obsessive bonsai grower.
            Engineering taught me precision; mime taught me patience; bonsai taught me both.
          </p>
          <blockquote className="border-l-2 border-primary pl-5 font-serif text-2xl text-foreground italic">
            "Carpe Diem." — the only motto I needed.
          </blockquote>
          <a
            href="#"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition"
          >
            <Download className="w-4 h-4" /> Download CV
          </a>
        </div>

        <div className="space-y-4">
          {[
            { icon: MapPin, label: "Based in", value: "Kerala, India" },
            { icon: GraduationCap, label: "Studying", value: "B.Tech Mechanical, KTU" },
            { icon: Sparkles, label: "Focus", value: "Robotics & Mechatronics" },
          ].map((item) => (
            <div key={item.label} className="glass-card rounded-2xl p-5 flex items-start gap-4">
              <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center shrink-0">
                <item.icon className="w-5 h-5" />
              </div>
              <div>
                <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide">{item.label}</p>
                <p className="font-medium mt-0.5">{item.value}</p>
              </div>
            </div>
          ))}
          <div className="glass-card rounded-2xl p-5">
            <p className="text-xs text-muted-foreground font-mono uppercase tracking-wide mb-3">Currently</p>
            <ul className="space-y-2 text-sm">
              <li>🤖 Learning ROS 2 Humble</li>
              <li>🌱 Growing 7 bonsai trees</li>
              <li>🎭 Coaching student mimes</li>
              <li>📚 Reading: Make: Electronics</li>
            </ul>
          </div>
        </div>
      </div>
    </Section>
  );
}

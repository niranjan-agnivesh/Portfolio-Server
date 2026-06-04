import { Section } from "./Section";
import { Mail, Github, Linkedin, MessageCircle, MapPin, Send } from "lucide-react";

export function Contact() {
  return (
    <Section id="contact" eyebrow="get in touch" title="Let's build something." subtitle="Or just say hi. I read every message.">
      <div className="grid lg:grid-cols-[1fr_1.2fr] gap-6">
        <div className="space-y-3">
          {[
            { icon: Mail, label: "Email", value: "niranjanagniveshkb@gmail.com", href: "mailto:niranjanagniveshkb@gmail.com" },
            { icon: MessageCircle, label: "WhatsApp", value: "Message on WhatsApp", href: "#" },
            { icon: Linkedin, label: "LinkedIn", value: "niranjan-agnivesh-k-b", href: "https://www.linkedin.com/in/niranjan-agnivesh-k-b-a38644291" },
            { icon: Github, label: "GitHub", value: "github.com/niranjan-agnivesh", href: "https://github.com/niranjan-agnivesh" },
            { icon: MapPin, label: "Location", value: "Kerala, India 🇮🇳" },
          ].map((c) => {
            const Inner = (
              <div className="glass-card rounded-xl p-4 flex items-center gap-4 hover:border-primary transition">
                <div className="w-10 h-10 rounded-lg bg-primary/15 text-primary flex items-center justify-center">
                  <c.icon className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-mono uppercase text-muted-foreground">{c.label}</p>
                  <p className="font-medium">{c.value}</p>
                </div>
              </div>
            );
            return c.href ? (
              <a key={c.label} href={c.href} className="block">{Inner}</a>
            ) : (
              <div key={c.label}>{Inner}</div>
            );
          })}
        </div>

        <form
          className="glass-card rounded-2xl p-6 space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            alert("Thanks! Hook this up to EmailJS or Formspree to start receiving messages.");
          }}
        >
          <div className="grid sm:grid-cols-2 gap-4">
            <Field label="Name" name="name" placeholder="Your name" />
            <Field label="Email" name="email" type="email" placeholder="you@example.com" />
          </div>
          <Field label="Subject" name="subject" placeholder="What's this about?" />
          <div>
            <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">Message</label>
            <textarea
              required
              rows={5}
              placeholder="Tell me everything..."
              className="w-full bg-background/60 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition resize-none"
            />
          </div>
          <button
            type="submit"
            className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:opacity-90 transition glow"
          >
            <Send className="w-4 h-4" /> Send message
          </button>
        </form>
      </div>
    </Section>
  );
}

function Field({ label, name, type = "text", placeholder }: { label: string; name: string; type?: string; placeholder?: string }) {
  return (
    <div>
      <label className="block text-xs font-mono uppercase text-muted-foreground mb-2">{label}</label>
      <input
        required
        name={name}
        type={type}
        placeholder={placeholder}
        className="w-full bg-background/60 border border-border rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-primary transition"
      />
    </div>
  );
}

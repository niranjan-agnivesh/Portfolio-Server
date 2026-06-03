import { Github, Linkedin, Mail } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t border-border py-10 px-6 mt-10">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <div className="font-mono text-primary">&lt;Niranjan /&gt;</div>
        <p className="font-serif italic">Built with Carpe Diem energy ☀️</p>
        <div className="flex items-center gap-4">
          <a href="https://github.com" aria-label="GitHub" className="hover:text-primary"><Github className="w-4 h-4" /></a>
          <a href="https://linkedin.com" aria-label="LinkedIn" className="hover:text-primary"><Linkedin className="w-4 h-4" /></a>
          <a href="mailto:hello@niranjan.dev" aria-label="Email" className="hover:text-primary"><Mail className="w-4 h-4" /></a>
          <span className="text-xs">© {new Date().getFullYear()}</span>
        </div>
      </div>
    </footer>
  );
}

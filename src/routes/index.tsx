import { createFileRoute } from "@tanstack/react-router";
import { Navbar } from "@/components/Navbar";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Skills } from "@/components/Skills";
import { Projects } from "@/components/Projects";
import { Timeline } from "@/components/Timeline";
import { Interests } from "@/components/Interests";
import { Blog } from "@/components/Blog";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";


export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Niranjan — Mechanical Engineer · Roboticist · Mime Artist" },
      {
        name: "description",
        content:
          "Personal portfolio of Niranjan — B.Tech Mechanical Engineering student at KTU, robotics enthusiast, state Kalolsavam-winning mime artist, and bonsai grower from Kerala, India.",
      },
      { property: "og:title", content: "Niranjan — Engineer, Mime Artist, Bonsai Grower" },
      { property: "og:description", content: "Building intelligent machines by day, growing bonsai by night. Carpe Diem." },
      { property: "og:type", content: "website" },
    ],
    links: [
      { rel: "canonical", href: "/" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Syne:wght@600;700;800&family=Plus+Jakarta+Sans:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&family=Instrument+Serif&display=swap",
      },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main>
      <Navbar />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Timeline />
      <Interests />
      <Blog />
      <Contact />
      <Footer />
    </main>
  );
}

import dynamic from "next/dynamic";
import HeroSection from "./components/hero-section/page";
import "./css/card.css";

// Below-the-fold sections: JS code-split → initiales Bundle deutlich kleiner.
// SSR rendert weiterhin HTML → SEO bleibt erhalten.
const About = dynamic(() => import("./components/about/page"));
const Experience = dynamic(() => import("./components/experience/page"));
const Skills = dynamic(() => import("./components/skills/page"));
const Projects = dynamic(() => import("./components/projects/index"));
const Contact = dynamic(() => import("./components/contact/index"));
const SectionReveal = dynamic(() => import("./components/SectionReveal"));
export default function Home() {
  return (
    <>
      <div className="container">
        <HeroSection />

        <SectionReveal>
          <About />
        </SectionReveal>

        <SectionReveal>
          <Experience />
        </SectionReveal>

        <SectionReveal>
          <Skills />
        </SectionReveal>

        <SectionReveal>
          <Projects />
        </SectionReveal>

        <SectionReveal>
          <Contact />
        </SectionReveal>
      </div>
    </>
  );
}

import type { Metadata } from "next";
import { projectsData } from "@/../utils/Data/projects-data";
import ProjectCard from "@/app/components/projects/project-card";

export const metadata: Metadata = {
  title: "Projects",
  description:
    "Alle Projekte von Henri Schulz – ASIC-Design mit Verilog, Full-Stack-Apps, Analog-Schaltungstechnik und mehr.",
  alternates: {
    canonical: "https://henrischulz.com/projects",
  },
  openGraph: {
    title: "Projects | Henri Schulz",
    description:
      "Projekte von Henri Schulz: von Tiny-Tapeout-ASICs bis hin zu Full-Stack-Webanwendungen.",
    url: "https://henrischulz.com/projects",
  },
};

const ProjectsPage = () => {
  return (
    <section id="projects" className="relative min-h-screen  overflow-hidden">
      {/* Background Decorative Elements */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-cyan-600/10 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-cyan-900/10 blur-[120px] rounded-full pointer-events-none" />

      <div className="flex flex-col gap-16 items-center container mx-auto py-24 px-4 sm:px-8 relative z-10">
        <div className="max-w-3xl text-center flex flex-col gap-6">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tighter">
            The Digital{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-cyan-800">
              Vault
            </span>
          </h1>
          <p className="text-lg md:text-xl text-slate-400 leading-relaxed font-medium italic">
            A collection of projects I've built — from hardware design to
            full-stack apps.
          </p>
        </div>

        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3 w-full">
          {projectsData.map((project) => (
            <div key={project.id} className="h-full">
              <ProjectCard project={project} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsPage;

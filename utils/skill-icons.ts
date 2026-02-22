import {
  SiHtml5,
  SiCss3,
  SiJavascript,
  SiTypescript,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiNodedotjs,
  SiMongodb,
  SiMysql,
  SiFirebase,
  SiGit,
  SiFigma,
  SiBootstrap,
  SiMui,
  SiCanva,
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiFreelancer,
  SiPython,
  SiCplusplus,
  SiDocker,
} from "react-icons/si";
import { TbCpu } from "react-icons/tb";
import { IconType } from "react-icons";

export const getSkillIcon = (skill: string): IconType => {
  const skillLower = skill.toLowerCase();

  switch (skillLower) {
    case "html":
      return SiHtml5;
    case "css":
      return SiCss3;
    case "javascript":
      return SiJavascript;
    case "js":
      return SiJavascript;
    case "typescript":
      return SiTypescript;
    case "ts":
      return SiTypescript;
    case "react":
      return SiReact;
    case "next js":
    case "nextjs":
    case "next.js":
      return SiNextdotjs;
    case "tailwind":
    case "tailwindcss":
      return SiTailwindcss;
    case "node js":
    case "nodejs":
    case "node.js":
      return SiNodedotjs;
    case "mongodb":
      return SiMongodb;
    case "mysql":
      return SiMysql;
    case "firebase":
      return SiFirebase;
    case "git":
      return SiGit;
    case "figma":
      return SiFigma;
    case "bootstrap":
      return SiBootstrap;
    case "materialui":
    case "mui":
      return SiMui;
    case "canva":
      return SiCanva;
    case "illustrator":
      return SiAdobeillustrator;
    case "photoshop":
      return SiAdobephotoshop;
    case "python":
      return SiPython;
    case "c++":
      return SiCplusplus;
    case "docker":
      return SiDocker;
    case "verilog":
      return TbCpu;
    default:
      return SiFreelancer; // Fallback icon
  }
};

export const getSkillColor = (skill: string): string => {
  const skillLower = skill.toLowerCase();
  switch (skillLower) {
    case "html":
      return "#E34F26"; // HTML5 Red
    case "css":
      return "#1572B6"; // CSS3 Blue
    case "javascript":
    case "js":
      return "#F7DF1E"; // JS Yellow
    case "typescript":
    case "ts":
      return "#3178C6"; // TS Blue
    case "react":
      return "#61DAFB"; // React Cyan
    case "next js":
    case "nextjs":
    case "next.js":
      return "#ffffff"; // Next.js White
    case "tailwind":
    case "tailwindcss":
      return "#06B6D4"; // Tailwind Cyan
    case "node js":
    case "nodejs":
    case "node.js":
      return "#339933"; // Node.js Green
    case "mongodb":
      return "#47A248"; // MongoDB Green
    case "mysql":
      return "#4479A1"; // MySQL Blue
    case "firebase":
      return "#FFCA28"; // Firebase Yellow
    case "git":
      return "#F05032"; // Git Orange
    case "figma":
      return "#F24E1E"; // Figma Red/Pink
    case "bootstrap":
      return "#7952B3"; // Bootstrap Purple
    case "materialui":
    case "mui":
      return "#0081CB"; // MUI Blue
    case "canva":
      return "#00C4CC"; // Canva Cyan
    case "illustrator":
      return "#FF9A00"; // Illustrator Orange
    case "photoshop":
      return "#31A8FF"; // Photoshop Blue
    case "python":
      return "#3776ab"; // Python blue
    case "c++":
      return "#00599c"; // C++ blue
    case "docker":
      return "#2496ed"; // Docker blue
    case "verilog":
      return "#84b547"; // Generic Greenish for Hardware/Verilog
    default:
      return "#ffffff"; // Fallback White
  }
};

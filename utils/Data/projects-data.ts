export const projectsData = [
  {
    id: 1,
    name: "Three-Body-Problem ASIC",
    description:
      "An ASIC designed in Verilog to simulate the three-body gravitational problem with real-time VGA output, submitted to Tiny Tapeout. The design operates under strict hardware constraints in terms of area and logic resources, implementing the physics simulation entirely in hardware.",
    tools: ["Verilog", "Tiny Tapeout"],
    role: "Hardware Designer",
    code: "https://github.com/jknotrowling/TinyTapeoutVGA",
    demo: "",
    date: "2026",
    images: ["/projects/tinytapeout/tinytapeout1.png"],
    videos: [""],
    highlights: [
      "Implemented gravitational three-body simulation entirely in synthesizable Verilog.",
      "Integrated VGA controller for real-time visual output of the simulation.",
      "Designed within strict Tiny Tapeout area constraints.",
    ],
    challenges: [
      "Fitting a physically accurate simulation within tight logic area budgets.",
      "Implementing fixed-point arithmetic for gravitational calculations in hardware.",
    ],
  },
  {
    id: 2,
    name: "DT Visualizer",
    description:
      "An interactive, browser-based visualization platform that enables students to systematically examine and better comprehend the interdependencies within boolean expressions. The tool converts abstract logical constructs into a dynamic visual environment, allowing users to explore structural relationships and dependencies interactively instead of relying solely on static lecture notes or slides.",
    tools: ["JavaScript", "HTML", "CSS"],
    role: "Developer",
    code: "https://github.com/henriSchulz/dt_logic_visualizer",
    demo: "https://dt-visualisierer.itiv.kit.edu",
    date: "2025",
    images: [
      "/projects/dt-visu/DT-Visu1.png",
      "/projects/dt-visu/DT-Visu2.png",
    ],
    videos: [""],
    highlights: [
      "Built a fully browser-based tool requiring no installation or backend.",
      "Converts abstract boolean expressions into dynamic, interactive visual graphs.",
      "Enables students to explore structural relationships and dependencies interactively.",
      "Developed as part of research work at ITIV, KIT.",
    ],
    challenges: [
      "Designing an intuitive UI for complex logical structures without overwhelming the user.",
      "Implementing dynamic graph layouts that remain readable for deeply nested expressions.",
    ],
  },
  {
    id: 4,
    name: "Analog equalizer circuit design, implementation & simulation",
    description:
      "Design and analysis of an analog equalizer for targeted audio signal frequency shaping, developed as part of an Electrical Engineering workshop at KIT. The project covers second-order Sallen-Key high-pass and low-pass filters with a cutoff frequency of 1 kHz and quality factor of 0.5, an inverting adder circuit with variable resistors, LTSpice simulation of all filter stages, and hardware implementation on a TI breadboard with oscilloscope measurements.",
    tools: ["LTSpice", "Python", "Matlab"],
    role: "Circuit Synthesis",

    demo: "",
    code: "https://github.com/henriSchulz/LEN_WORKSHOP_B",
    date: "2025",
    images: [
      "/projects/amp-circut/add_bode.png",
      "/projects/amp-circut/VarResInvAdd_Schaltbild.png",
      "/projects/amp-circut/add-var-brett.jpg",
    ],
    videos: [""],
    highlights: [
      "Synthesized Sallen-Key 2nd-order low-pass and high-pass filters with Q=0.5 and f_c=1 kHz.",
      "Simulated filter frequency response in LTSpice and verified with Bode diagrams.",
      "Built and measured filter circuits on a TI breadboard using an oscilloscope and Lenlab.",
      "Designed an inverting adder with variable resistors enabling adjustable bass/treble equalisation.",
      "Demonstrated allpass behaviour by inverting the low-pass signal before summation.",
    ],
    challenges: [
      "Realising the calculated 15.92 kΩ resistor from available components via series combination.",
      "Generating a virtual ground at 1.65 V to allow single-supply AC signal processing on the TI-Board.",
    ],
  },

  {
    id: 3,
    name: "Full Stack Digital Flashcard Application",
    description:
      "A full-stack flashcard application with cloud synchronization and AI integration. Built with TypeScript, React on the frontend, and an Express.js backend connected to a SQLite database. Integrates OpenAI for AI-powered card generation and learning assistance.",
    tools: ["TypeScript", "React", "Express.js", "SQLite", "OpenAI"],
    role: "Full-stack Developer",
    code: "https://github.com/henriSchulz/kartai-backend",
    demo: "",
    date: "2023",
    images: ["/projects/kartai/kartai-1-SeE5QQy9.png"],
    videos: [""],
    highlights: [
      "Developed cloud synchronization to keep flashcard decks in sync across sessions.",
      "Integrated OpenAI API for AI-assisted card generation and smart study suggestions.",
      "Built a RESTful Express.js backend with SQLite for persistent, lightweight data storage.",
      "Designed a responsive React frontend for an intuitive study experience.",
    ],
    challenges: [
      "Implementing reliable cloud synchronization with conflict resolution.",
      "Designing an effective prompt strategy for AI-generated flashcard content.",
    ],
  },

  {
    id: 5,
    name: "Boolean Logic Parser & Evaluator",
    description:
      "A TypeScript library for AST-based parsing and recursive evaluation of complex boolean expressions. Supports nested expressions, all standard logic gates (AND, OR, NOT, XOR, NAND, NOR, XNOR), and automated LaTeX export for readable formula representation. Published as an npm package.",
    tools: ["TypeScript", "Node.js", "npm"],
    role: "Library Author",
    code: "https://github.com/henriSchulz/boolean-expression-ast",
    demo: "",
    date: "2025",
    images: ["/projects/boolean-ast/ast.png"],
    videos: [""],
    highlights: [
      "Implemented an AST-based parser for complex boolean expressions with full operator precedence support.",
      "Supports all standard logic gates including XOR, NAND, NOR, and XNOR.",
      "Added automated LaTeX export for clean mathematical formula representation.",
      "Handles arbitrarily nested expressions through recursive evaluation.",
    ],
    challenges: [
      "Designing a robust grammar and recursive parser for boolean expressions with correct operator precedence.",
      "Generating clean and correct LaTeX output for complex nested expressions.",
    ],
  },
];

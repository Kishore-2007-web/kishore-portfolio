/**
 * Placeholder projects list.
 * 10 clearly marked placeholder projects that Kishore can manually replace or edit.
 * Categories used: "Web Design", "Web Application", "Full Stack", "3D Graphics"
 */
export const projectsData = [
  {
    id: 1,
    title: "Responsive Portfolio Starter",
    category: "Web Design",
    tags: ["HTML", "CSS", "JavaScript"],
    summary: "A clean, modern single-page portfolio template for displaying student projects.",
    description: "This is a customizable portfolio template built with semantic HTML and custom CSS. It serves as a visual placeholder to demonstrate responsive layouts, interactive elements, and accessible forms across different viewing devices.",
    image: "", // Kishore can drop an image URL here, otherwise visual placeholder renders
    demoUrl: "#",
    githubUrl: "https://github.com/Kishore-2007-web",
    details: {
      challenge: "Building a fluid layout that scales seamlessly from small mobile viewports up to large desktop monitors without breaking grid hierarchies.",
      learning: "Deepened understanding of CSS Grid, Flexbox, media queries, and touch-target spacing policies.",
      features: ["Responsive Mobile Drawer Menu", "Semantic HTML5 Markup", "CSS variables for dynamic styling"]
    }
  },
  {
    id: 2,
    title: "Task Kanban Board",
    category: "Web Application",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    summary: "A collaborative project tracking board with persistent real-time storage.",
    description: "An interactive project management dashboard featuring drag-and-drop task items, status columns, and user assignments. Powered by Firebase Firestore for instantaneous data synchronization across sessions.",
    image: "",
    demoUrl: "#",
    githubUrl: "https://github.com/Kishore-2007-web",
    details: {
      challenge: "Ensuring database transactions remain in sync when multiple users manipulate columns concurrently.",
      learning: "Configuring Firebase listeners, offline persistence mechanisms, and state updating lifecycle in vanilla JavaScript.",
      features: ["Drag and Drop Interface", "Firebase Firestore Database", "Real-Time UI updates"]
    }
  },
  {
    id: 3,
    title: "Isometric Cozy Room Model",
    category: "3D Graphics",
    tags: ["Blender"],
    summary: "Low-poly indoor environment design with custom lighting structures.",
    description: "A complete 3D isometric room model built from scratch. Features customized asset modeling, detailed texturing, and custom warm emission lighting setups designed for lightweight web rendering applications.",
    image: "",
    demoUrl: "#",
    githubUrl: "https://github.com/Kishore-2007-web",
    details: {
      challenge: "Optimizing polygon count and texture maps to enable swift browser loading and canvas rendering.",
      learning: "Learned efficient mesh topology, uv-unwrapping, lighting baking, and glTF file size reduction.",
      features: ["Low-Poly Asset Design", "Warm Light Emission setups", "Optimized mesh topology for web export"]
    }
  },
  {
    id: 4,
    title: "Student Grade Analytics Hub",
    category: "Web Application",
    tags: ["HTML", "CSS", "JavaScript"],
    summary: "A metrics dashboard for calculating student averages and performance trends.",
    description: "A local storage based web tool designed for educators. Enables tracking student performance across subjects, generating bar graphs, calculating averages, and exporting logs in structured formats.",
    image: "",
    demoUrl: "#",
    githubUrl: "https://github.com/Kishore-2007-web",
    details: {
      challenge: "Implementing dynamic charting and analytics metrics using lightweight client-side scripts.",
      learning: "Leveraged browser LocalStorage, dynamic DOM nodes creation, and SVG graphing techniques.",
      features: ["LocalStorage data safety", "Custom SVG Data visualization", "Dynamic spreadsheet inputs"]
    }
  },
  {
    id: 5,
    title: "Real-Time Firebase Chat",
    category: "Full Stack",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    summary: "Instant messaging client featuring user authentication and chat channels.",
    description: "A lightweight chatting application utilizing Firebase Authentication for user accounts. It supports real-time message streams, custom user profiles, and separate channels for various discussion threads.",
    image: "",
    demoUrl: "#",
    githubUrl: "https://github.com/Kishore-2007-web",
    details: {
      challenge: "Implementing secure authentication routes and database access rules that protect user conversations.",
      learning: "Writing robust security rules for Firebase, and handling reactive database subscriptions.",
      features: ["Google/Email authentication", "Real-time query listeners", "Mobile-first chat window styling"]
    }
  },
  {
    id: 6,
    title: "Tech Hardware Landing Page",
    category: "Web Design",
    tags: ["HTML", "CSS", "JavaScript"],
    summary: "High-fidelity, scroll-interactive promotional page for computer accessories.",
    description: "A polished product showcases page detailing engineering specifications of custom keycaps and mechanical keyboards. Integrated with sleek CSS transitions and intersection observer triggers.",
    image: "",
    demoUrl: "#",
    githubUrl: "https://github.com/Kishore-2007-web",
    details: {
      challenge: "Designing rich micro-interactions and transitions that feel fluid on low-end mobile hardware.",
      learning: "Applying hardware-accelerated CSS transformations and optimizing layout reflow costs.",
      features: ["Scroll Reveal Animations", "Interactive Spec tables", "Polished dark-mode color theme"]
    }
  },
  {
    id: 7,
    title: "Blender Fantasy Asset Pack",
    category: "3D Graphics",
    tags: ["Blender"],
    summary: "A stylized set of low-poly elements designed for future game projects.",
    description: "A set of low-poly modular assets (swords, chests, trees, portals) optimized for game engine integration. Formatted in standard FBX/OBJ and ready for real-time applications.",
    image: "",
    demoUrl: "#",
    githubUrl: "https://github.com/Kishore-2007-web",
    details: {
      challenge: "Ensuring consistent scale settings and texture palette reuse across different independent models.",
      learning: "Applying visual palettes via a single atlas texture and rigging joint anchors.",
      features: ["Stylized texture atlas integration", "Rigged chests with pivot origins", "Game-engine ready formats"]
    }
  },
  {
    id: 8,
    title: "City Weather Tracker",
    category: "Web Application",
    tags: ["HTML", "CSS", "JavaScript"],
    summary: "Weather lookup application utilizing REST APIs and weather status imagery.",
    description: "A responsive weather widget that fetches current data for searched cities. Incorporates smart UI updates such as changing background themes according to weather descriptions.",
    image: "",
    demoUrl: "#",
    githubUrl: "https://github.com/Kishore-2007-web",
    details: {
      challenge: "Handling API rate limit restrictions, network errors, and displaying user-friendly error banners.",
      learning: "Mastered asynchronous JavaScript, JSON parsing, API request management, and fallback layouts.",
      features: ["Weather API lookup", "Conditional CSS theming", "Input validation and error alerts"]
    }
  },
  {
    id: 9,
    title: "Personal Diary Application",
    category: "Full Stack",
    tags: ["HTML", "CSS", "JavaScript", "Firebase"],
    summary: "Private markdown-enabled logging platform with Firestore sync.",
    description: "A personal diary application with client-side markdown rendering. Uses Firebase Auth to partition database records, allowing users to save personal journals securely.",
    image: "",
    demoUrl: "#",
    githubUrl: "https://github.com/Kishore-2007-web",
    details: {
      challenge: "Compiling markdown to safe HTML strings without exposing users to cross-site scripting (XSS) risks.",
      learning: "Configuring sanitize routines, working with parser dependencies, and database write parameters.",
      features: ["Markdown preview canvas", "Secure user document isolation", "Auto-saving functionality"]
    }
  },
  {
    id: 10,
    title: "Tech Article Layout",
    category: "Web Design",
    tags: ["HTML", "CSS"],
    summary: "Typographic layout focusing on text readability, dark/light contrast, and page flow.",
    description: "A clean reading interface mockup tailored for tech blogs. Emphasizes visual accessibility, proper line lengths, fluid spacing, and optimized font contrast ratios.",
    image: "",
    demoUrl: "#",
    githubUrl: "https://github.com/Kishore-2007-web",
    details: {
      challenge: "Achieving high accessibility rating (WCAG AAA) across varying theme selections.",
      learning: "Working with relative CSS size tokens, custom root colors, and structural line-height metrics.",
      features: ["AAA WCAG Contrast levels", "Dynamic font-scaling elements", "Reading progress bar indicator"]
    }
  }
];

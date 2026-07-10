/**
 * Tech stack skills configuration.
 * Groups skills into clean categories for presentation.
 * Icon references map to Lucide icons dynamically in the component.
 */
export const skillsData = [
  {
    category: "Frontend Core",
    description: "Building semantic, responsive, and interactive user interfaces.",
    skills: [
      { name: "HTML", iconName: "HtmlIcon" },
      { name: "CSS", iconName: "CssIcon" },
      { name: "JavaScript", iconName: "JsIcon" }
    ]
  },
  {
    category: "Cloud & Backend Platforms",
    description: "Utilizing backend-as-a-service for databases, storage, and authentication.",
    skills: [
      { name: "Firebase", iconName: "FirebaseIcon" }
    ]
  },
  {
    category: "Creative / 3D Asset Creation",
    description: "Designing low-poly models, lighting setups, and real-time game assets.",
    skills: [
      { name: "Blender", iconName: "BlenderIcon" }
    ]
  },
  {
    category: "Workflow & Tools",
    description: "Version control, collaboration, and local development environments.",
    skills: [
      { name: "Git", iconName: "GitBranch" },
      { name: "GitHub", iconName: "Github" },
      { name: "VS Code", iconName: "Code" }
    ]
  }
];

// Single source of truth for work shown on the home overlay, /work and /work/[slug].
// Entries marked `placeholder: true` are stand-ins — replace with approved client work.

export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  tags: string[];
  description: string;
  placeholder?: boolean;
};

export const projects: Project[] = [
  {
    slug: "toothless-studio",
    title: "Toothless Studio",
    client: "Toothless",
    year: "2026",
    tags: ["Identity", "Systems", "Art direction"],
    description:
      "The in-house identity for an independent creative studio focused on logos, identity and systems.",
  },
  {
    slug: "client-project-01",
    title: "Client Project 01",
    client: "Client 01",
    year: "2026",
    tags: ["Brand identity", "Logo"],
    description:
      "A placeholder brand identity project. Approved project details will replace this copy.",
    placeholder: true,
  },
  {
    slug: "client-project-02",
    title: "Client Project 02",
    client: "Client 02",
    year: "2025",
    tags: ["Visual identity", "Typography"],
    description:
      "A placeholder visual identity project. Approved project details will replace this copy.",
    placeholder: true,
  },
  {
    slug: "client-project-03",
    title: "Client Project 03",
    client: "Client 03",
    year: "2025",
    tags: ["Logo", "Packaging"],
    description:
      "A placeholder logo and packaging project. Approved project details will replace this copy.",
    placeholder: true,
  },
  {
    slug: "client-project-04",
    title: "Client Project 04",
    client: "Client 04",
    year: "2024",
    tags: ["Brand refresh", "Guidelines"],
    description:
      "A placeholder brand refresh project. Approved project details will replace this copy.",
    placeholder: true,
  },
];

export const EMAIL = "hi@toothless.design";

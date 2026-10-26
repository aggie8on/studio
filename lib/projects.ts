// Single source of truth for the public work archive and case-study pages.
export type Project = {
  slug: string;
  title: string;
  client: string;
  year: string;
  tags: string[];
  description: string;
  overview: string;
  services: string[];
};

export const projects: Project[] = [
  {
    slug: "toothless-studio",
    title: "The Toothless identity",
    client: "Toothless",
    year: "2026",
    tags: ["Brand identity", "Identity systems", "Art direction"],
    description: "Building a clear, flexible identity for an independent creative studio.",
    overview:
      "Toothless is built around a simple belief: good ideas deserve a clear shape. The studio identity brings that belief into a concise visual language designed to feel direct, useful and recognisable across touchpoints.",
    services: ["Studio positioning", "Logo and visual identity", "Identity system", "Digital presence"],
  },
];

export const EMAIL = "hi@toothless.design";

import Image from "next/image";
import Link from "next/link";
import { EMAIL } from "../../lib/projects";

const projects = [
  { name: "Project 01", type: "Brand identity", year: "2026" },
  { name: "Project 02", type: "Visual identity", year: "2026" },
  { name: "Project 03", type: "Identity system", year: "2026" },
  { name: "Project 04", type: "Art direction", year: "2026" },
  { name: "Project 05", type: "Brand applications", year: "2026" },
  { name: "Project 06", type: "Exploration", year: "2026" },
  { name: "Project 07", type: "Typography", year: "2026" },
  { name: "Project 08", type: "Digital identity", year: "2026" },
  { name: "Project 09", type: "Identity system", year: "2026" },
];

export const metadata = {
  title: "Work — Toothless",
  description: "Selected identity, design and visual systems by Toothless.",
};

export default function WorkPage() {
  return (
    <main className="reference-shell">
      <aside className="reference-sidebar">
        <Link href="/work" className="reference-logo" aria-label="Toothless work">
          <Image src="/brand/logos/toothless-01.svg" alt="Toothless" width={126} height={58} priority />
        </Link>
        <p className="reference-kicker">LOGOS, IDENTITY &amp; SYSTEMS</p>
        <div className="reference-bio">
          <p>Toothless is an independent creative studio building clear, characterful identities and systems.</p>
          <p>We turn good ideas into visual languages made to work in the real world.</p>
          <p><a href={`mailto:${EMAIL}?subject=Project%20enquiry`}>Available for select projects ↗</a></p>
        </div>
        <div className="reference-sidebar-bottom">
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <span>INDEPENDENT · 2026</span>
        </div>
      </aside>

      <section className="reference-main">
        <nav className="reference-tabs" aria-label="Work categories">
          <span className="reference-tab-active">Design</span>
          <span>Motion</span>
          <span>Product</span>
          <span>Direction</span>
          <span>Experiments</span>
        </nav>

        <header className="reference-heading">
          <div>
            <h1>Design</h1>
            <p>Brand · Identity · Systems</p>
          </div>
          <span className="reference-count">SELECTED WORK</span>
        </header>

        <div className="reference-intro">
          <span>TOOTHLESS STUDIO</span>
          <p>A selection of projects and explorations. Project artwork is represented with consistent placeholders until final case-study imagery is ready.</p>
        </div>

        <div className="reference-project-grid">
          {projects.map((project, index) => (
            <article className="reference-project" key={project.name}>
              <div className="reference-placeholder" aria-label={`Image placeholder for ${project.name}`}>
                <span className="placeholder-index">{String(index + 1).padStart(2, "0")}</span>
                <span className="placeholder-title">{project.name}</span>
                <span className="placeholder-hint">IMAGE PLACEHOLDER</span>
              </div>
              <div className="reference-project-meta">
                <span>{project.name}</span>
                <span>{project.year}</span>
              </div>
              <p className="reference-project-type">{project.type}</p>
            </article>
          ))}
        </div>

        <footer className="reference-footer">
          <span>TOOTHLESS · LOGOS, IDENTITY &amp; SYSTEMS</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL} ↗</a>
        </footer>
      </section>
    </main>
  );
}

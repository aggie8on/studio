import Image from "next/image";
import Link from "next/link";
import { EMAIL } from "../../lib/projects";

const categories = [
  { name: "Design", count: "09", active: true },
  { name: "Motion", count: "—" },
  { name: "Product", count: "—" },
  { name: "Direction", count: "—" },
  { name: "Experiments", count: "—" },
];

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
  title: "Design — Toothless",
  description: "Selected design work from Toothless, an independent identity studio.",
};

export default function WorkPage() {
  return (
    <main className="reference-shell">
      <aside className="reference-sidebar">
        <Link href="/work" className="reference-brand" aria-label="Toothless — Design">
          <Image src="/brand/logos/toothless-01.svg" alt="Toothless" width={126} height={58} priority />
          <span>LOGOS, IDENTITY &amp; SYSTEMS</span>
        </Link>

        <div className="reference-mosaic-heading">
          <span>BRAND ART</span>
          <span>1/{projects.length.toString().padStart(2, "0")}</span>
        </div>
        <div className="reference-mosaic" aria-label="Project thumbnail placeholders">
          {projects.concat(projects, projects).map((project, index) => (
            <div className="reference-mosaic-cell" key={index} aria-label={project.name}>
              <span>{String((index % projects.length) + 1).padStart(2, "0")}</span>
            </div>
          ))}
        </div>

        <div className="reference-sidebar-bottom">
          <span className="reference-sound-mark" aria-hidden="true">∴</span>
          <span>• &nbsp; SOUND</span>
          <div className="reference-sidebar-links">
            <a href={`mailto:${EMAIL}`}>CONTACT</a>
            <span>STUDIO</span>
            <a href={`mailto:${EMAIL}`} aria-label="Email Toothless">↗</a>
          </div>
        </div>
      </aside>

      <section className="reference-main">
        <nav className="reference-tabs" aria-label="Work categories">
          <Link className="reference-home" href="/work">← HOME</Link>
          {categories.map((category) => (
            <span className={category.active ? "reference-tab reference-tab-active" : "reference-tab"} key={category.name}>
              {category.name}<small>{category.count}</small>
            </span>
          ))}
        </nav>

        <div className="reference-content">
          <header className="reference-heading">
            <h1>Design</h1>
            <p>Brand · Identity · Systems</p>
          </header>

          <section className="reference-intro">
            <span>BRAND ART</span>
            <p>Identity, visual systems and design work from Toothless.</p>
          </section>

          <div className="reference-project-grid">
            {projects.map((project, index) => (
              <article className="reference-project" key={project.name}>
                <div className="reference-placeholder">
                  <span className="placeholder-index">{String(index + 1).padStart(2, "0")}</span>
                  <span className="placeholder-title">{project.name}</span>
                </div>
                <div className="reference-project-meta">
                  <span>{project.name}</span>
                  <span>{project.year}</span>
                </div>
                <p className="reference-project-type">{project.type}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}

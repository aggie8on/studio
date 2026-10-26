import Link from "next/link";
import PageFoot from "../../components/page-foot";
import { projects } from "../../lib/projects";

export const metadata = {
  title: "Selected work — Toothless",
  description: "Selected identity and systems work by Toothless, an independent creative studio.",
};

export default function WorkPage() {
  return (
    <main className="page">
      <div className="col text">
        <header className="inner-head">
          <Link className="wordmark" href="/">Toothless<span className="period">.</span></Link>
          <Link href="/">Home <span aria-hidden="true">↗</span></Link>
        </header>
        <section className="inner-intro">
          <p className="eyebrow">Toothless · Archive</p>
          <h1>Selected work</h1>
          <p>A small selection of identities and systems shaped with intention.</p>
        </section>
        <ul className="work-list archive-list">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}`} className="work-item">
                <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
                <span className="work-copy">
                  <span className="work-title">{project.title}</span>
                  <span className="work-description">{project.description}</span>
                  <span className="work-tags">{project.tags.join(" · ")}</span>
                </span>
                <span className="work-meta">{project.year}<span aria-hidden="true">↗</span></span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="note">This archive will grow as new projects are ready to share.</p>
        <PageFoot />
      </div>
    </main>
  );
}

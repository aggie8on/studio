import Link from "next/link";
import PageFoot from "../../components/page-foot";
import { projects } from "../../lib/projects";

export const metadata = { title: "Work — Toothless" };

export default function WorkPage() {
  return (
    <main className="page">
      <div className="col text">
        <header className="simple-head">
          <strong><Link href="/">Toothless</Link></strong>
          <p><Link href="/">← Back home</Link></p>
        </header>
        <p className="sep">* * *</p>
        <p className="eyebrow">Selected work</p>
        <ul className="plain-work-list">
          {projects.map((project, index) => (
            <li key={project.slug}>
              <Link href={`/work/${project.slug}`} className="plain-work-item">
                <span className="plain-work-title">{project.title}</span>
                <span className="muted">{project.tags.join(" • ")}</span>
                <span className="muted">{project.year}</span>
              </Link>
            </li>
          ))}
        </ul>
        <p className="sep">* * *</p>
        <PageFoot />
      </div>
    </main>
  );
}

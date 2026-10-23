import Link from "next/link";
import PageFoot from "../../components/page-foot";
import TopBar from "../../components/top-bar";
import { projects } from "../../lib/projects";

export const metadata = { title: "Work — Toothless" };

export default function WorkPage() {
  return (
    <main className="page">
      <TopBar current="work" />

      <p className="eyebrow">Selected work</p>

      <ul className="index-list">
        {projects.map((project, index) => (
          <li key={project.slug}>
            <Link href={`/work/${project.slug}`} className="index-item">
              <span className="n">{String(index + 1).padStart(2, "0")}</span>
              <span className="t">{project.title}</span>
              <span className="g">{project.tags.join(" • ")}</span>
              <span className="y">{project.year}</span>
            </Link>
          </li>
        ))}
      </ul>

      <div className="index-grid">
        {projects.map((project, index) => (
          <Link href={`/work/${project.slug}`} className="card" key={project.slug}>
            <div className="ph" data-label={`Image ${String(index + 1).padStart(2, "0")}`}>
              {project.slug === "toothless-studio" && (
                <img src="/brand/logos/toothless-02.svg" alt="Toothless logo" />
              )}
            </div>
            <div className="card-meta">
              <span className="t">{project.title}</span>
              <span className="muted">{project.year}</span>
            </div>
          </Link>
        ))}
      </div>

      <PageFoot />
    </main>
  );
}

import Link from "next/link";
import { notFound } from "next/navigation";
import PageFoot from "../../../components/page-foot";
import TopBar from "../../../components/top-bar";
import { projects } from "../../../lib/projects";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((p) => p.slug === params.slug);
  return { title: project ? `${project.title} — Toothless` : "Toothless" };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const index = projects.findIndex((p) => p.slug === params.slug);
  const project = projects[index];
  if (!project) notFound();

  const next = projects[(index + 1) % projects.length];
  const isStudio = project.slug === "toothless-studio";

  return (
    <main className="page">
      <TopBar current="work" />

      <section className="case-head text">
        <h1>{project.title}</h1>
        <p className="muted">{project.tags.join(" • ")}</p>
        <p style={{ marginTop: "1.1em" }}>{project.description}</p>

        <div className="facts">
          <div className="row">
            <span className="muted">Client</span>
            <span>{project.client}</span>
          </div>
          <div className="row">
            <span className="muted">Year</span>
            <span>{project.year}</span>
          </div>
          <div className="row">
            <span className="muted">Services</span>
            <span>{project.tags.join(", ")}</span>
          </div>
        </div>
      </section>

      <section className="case-images" aria-label={`${project.title} imagery`}>
        <div className="ph" style={{ ["--ar" as string]: "16 / 10" }} data-label="Hero image">
          {isStudio && <img src="/brand/logos/toothless-02.svg" alt="Toothless logo" />}
        </div>
        <div className="case-pair">
          <div className="ph" data-label="Image 02" />
          <div className="ph" data-label="Image 03" />
        </div>
        <div className="ph" style={{ ["--ar" as string]: "16 / 9" }} data-label="Image 04" />
      </section>

      {project.placeholder && (
        <p className="muted" style={{ marginTop: "1.6em", maxWidth: 540 }}>
          Placeholder project — images and copy will be replaced with approved work.
        </p>
      )}

      <nav className="case-next" aria-label="Project navigation">
        <Link href="/work">← All work</Link>
        <Link href={`/work/${next.slug}`}>Next: {next.title} →</Link>
      </nav>

      <PageFoot />
    </main>
  );
}

import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import PageFoot from "../../../components/page-foot";
import { projects } from "../../../lib/projects";

const identityImages = [
  { file: "toothless-01.png", alt: "Toothless identity primary mark" },
  { file: "toothless-02.png", alt: "Toothless identity alternate mark" },
  { file: "toothless-03.png", alt: "Toothless identity visual exploration" },
  { file: "toothless-04.png", alt: "Toothless identity visual exploration variation" },
  { file: "toothless-05.png", alt: "Toothless identity alternate mark variation" },
  { file: "toothless-06.png", alt: "Toothless identity application" },
];

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  return {
    title: project ? `${project.title} — Toothless` : "Toothless",
    description: project?.description,
  };
}

export default function ProjectPage({ params }: { params: { slug: string } }) {
  const project = projects.find((item) => item.slug === params.slug);
  if (!project) notFound();

  return (
    <main className="page">
      <div className="col text">
        <header className="inner-head">
          <Link className="wordmark" href="/">Toothless<span className="period">.</span></Link>
          <Link href="/work">All work <span aria-hidden="true">↗</span></Link>
        </header>
        <section className="project-intro">
          <p className="eyebrow">Case study · {project.year}</p>
          <h1>{project.title}</h1>
          <p className="lead">{project.description}</p>
          <p>{project.overview}</p>
        </section>
        <section className="project-facts" aria-label="Project details">
          <div><span>Client</span><p>{project.client}</p></div>
          <div><span>Year</span><p>{project.year}</p></div>
          <div><span>Services</span><p>{project.services.join(", ")}</p></div>
        </section>
        <section className="project-visuals" aria-label="Toothless identity visuals">
          {identityImages.map((item, index) => (
            <figure className={`project-visual project-visual-${index + 1}`} key={item.file}>
              <Image src={`/brand/exports/${item.file}`} alt={item.alt} fill sizes="(max-width: 700px) 100vw, 50vw" />
            </figure>
          ))}
        </section>
        <section className="project-notes">
          <h2>The thinking</h2>
          <p>
            The identity is intended to be clear before it is clever: a foundation
            that can adapt to different formats without losing its character. The
            system prioritises consistency, practical use and a recognisable point of view.
          </p>
          <h2>Built to be used</h2>
          <p>
            Rather than treating the logo as a standalone asset, the work considers
            the wider identity — how type, spacing, colour and language work together
            across the studio’s digital presence and future brand applications.
          </p>
        </section>
        <div className="project-back"><Link href="/work">← Back to selected work</Link></div>
        <PageFoot />
      </div>
    </main>
  );
}

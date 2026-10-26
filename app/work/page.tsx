import Image from "next/image";
import Link from "next/link";
import { EMAIL } from "../../lib/projects";

const views = [
  { image: "toothless-01.png", title: "Primary mark", description: "Core identity" },
  { image: "toothless-02.png", title: "Alternate mark", description: "Identity variation" },
  { image: "toothless-03.png", title: "Visual language", description: "Identity exploration" },
  { image: "toothless-04.png", title: "Visual language", description: "Identity exploration" },
  { image: "toothless-05.png", title: "Alternate mark", description: "Identity variation" },
  { image: "toothless-06.png", title: "Identity application", description: "Brand application" },
];

export const metadata = {
  title: "Work — Toothless",
  description: "The Toothless studio identity and visual explorations.",
};

export default function WorkPage() {
  return (
    <main className="studio-shell">
      <aside className="studio-rail">
        <Link href="/" className="studio-brand" aria-label="Toothless home">
          <Image src="/brand/icons/toothless-10.svg" alt="" width={42} height={42} priority />
          <span>Toothless</span>
        </Link>
        <p className="studio-role">LOGOS, IDENTITY &amp; SYSTEMS</p>
        <div className="studio-bio">
          <p>Independent creative studio building identities with clarity and character.</p>
          <p>This archive currently presents the documented Toothless identity work.</p>
        </div>
        <div className="studio-rail-bottom">
          <a href={`mailto:${EMAIL}?subject=Project%20enquiry`}>Start a project ↗</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <nav aria-label="Main navigation">
            <Link href="/">Home</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </aside>
      <section className="studio-main">
        <nav className="studio-tabs" aria-label="Page navigation">
          <Link href="/">← HOME</Link>
          <span aria-current="page">WORK <small>01</small></span>
          <Link href="/studio">STUDIO</Link>
          <Link href="/contact">CONTACT</Link>
        </nav>
        <div className="studio-work-content">
          <header className="studio-work-title">
            <h1>Identity</h1>
            <p>Logos · Visual language · Systems</p>
          </header>
          <div className="studio-work-intro">
            <span>TOOTHLESS · 2026</span>
            <p>One documented studio identity, shown through selected marks and visual explorations. More case studies will appear here as real project work is ready to share.</p>
          </div>
          <div className="studio-gallery">
            {views.map((view, index) => (
              <Link href="/work/toothless-studio" className={`studio-gallery-item studio-gallery-item-${index + 1}`} key={view.image}>
                <div className="studio-gallery-image">
                  <Image src={`/brand/exports/${view.image}`} alt={`Toothless identity: ${view.title.toLowerCase()}`} fill sizes="(max-width: 700px) 50vw, 28vw" />
                </div>
                <div className="studio-gallery-caption"><span>{view.title}</span><small>{view.description}</small></div>
              </Link>
            ))}
          </div>
          <footer className="studio-footer">
            <span>TOOTHLESS · INDEPENDENT CREATIVE STUDIO</span>
            <a href={`mailto:${EMAIL}`}>{EMAIL} ↗</a>
          </footer>
        </div>
      </section>
    </main>
  );
}

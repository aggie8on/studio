import Image from "next/image";
import Link from "next/link";
import { EMAIL } from "../lib/projects";

const identityViews = [
  { image: "toothless-01.png", label: "Identity system — primary mark", alt: "Toothless identity primary mark" },
  { image: "toothless-02.png", label: "Identity system — alternate mark", alt: "Toothless identity alternate mark" },
  { image: "toothless-03.png", label: "Identity system — visual language", alt: "Toothless identity visual language" },
  { image: "toothless-04.png", label: "Identity system — visual language", alt: "Toothless identity visual language variation" },
  { image: "toothless-05.png", label: "Identity system — alternate mark", alt: "Toothless identity alternate mark variation" },
  { image: "toothless-06.png", label: "Identity system — applications", alt: "Toothless identity application" },
];

export default function Home() {
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
          <p>From the first mark to the system around it, we make considered visual identities for people with something to say.</p>
        </div>
        <div className="studio-rail-bottom">
          <a href={`mailto:${EMAIL}?subject=Project%20enquiry`}>Start a project ↗</a>
          <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          <nav aria-label="Main navigation">
            <Link href="/work">Work</Link>
            <Link href="/studio">Studio</Link>
            <Link href="/contact">Contact</Link>
          </nav>
        </div>
      </aside>
      <section className="studio-main">
        <header className="studio-section-heading">
          <p>SELECTED IDENTITY <span>·</span> 6 VIEWS</p>
          <Link href="/work">Work <span aria-hidden="true">→</span></Link>
        </header>
        <Link href="/work/toothless-studio" className="studio-feature">
          <div className="studio-feature-image">
            <Image src="/brand/exports/toothless-01.png" alt="Toothless studio identity, primary visual" fill priority sizes="(max-width: 700px) 100vw, 70vw" />
          </div>
          <div className="studio-feature-meta">
            <span>TOOTHLESS</span><span>IDENTITY SYSTEM · 2026</span>
          </div>
          <p className="studio-feature-description">A visual identity for an independent creative studio.</p>
        </Link>
        <div className="studio-grid">
          {identityViews.slice(1).map((view, index) => (
            <Link href="/work/toothless-studio" className="studio-card" key={view.image}>
              <div className="studio-card-image">
                <Image src={`/brand/exports/${view.image}`} alt={view.alt} fill sizes="(max-width: 700px) 100vw, 38vw" />
              </div>
              <div className="studio-card-meta"><span>{view.label.toUpperCase()}</span><span>{String(index + 2).padStart(2, "0")}</span></div>
            </Link>
          ))}
        </div>
        <footer className="studio-footer">
          <span>TOOTHLESS · INDEPENDENT CREATIVE STUDIO</span>
          <a href={`mailto:${EMAIL}`}>{EMAIL} ↗</a>
        </footer>
      </section>
    </main>
  );
}

import Link from "next/link";
import ProjectsOverlay from "../components/projects-overlay";
import { EMAIL } from "../lib/projects";

// Placeholder copy throughout — swap in real details when ready.
const timeline = [
  {
    when: "Now",
    title: "Brand guideline for Toothless Studio",
    tags: "Identity • Systems • Guidelines",
  },
  {
    when: "2025-2026",
    title: "Brand Identity for Client 01",
    tags: "Logo • Typography • Art direction",
  },
  {
    when: "2024-2025",
    title: "Visual Identity for Client 02",
    tags: "Research • Identity • Packaging",
  },
];

export default function Home() {
  return (
    <main className="page">
      <div className="col text">
        <header>
          <strong>Toothless</strong>
          <p>
            <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
          </p>
          <p style={{ marginTop: "1.1em" }}>
            Creative Studio
            <br />
            Uganda · Working remotely
          </p>
        </header>

        <p className="sep">* * *</p>

        <div className="stack">
          <p>
            Toothless is an independent creative studio focused on logos,
            identity and systems. We work with people and businesses who have
            something to say, and help them say it clearly.
          </p>
          <p>
            We believe in good ideas over decoration, in making things
            tangible before defending them, and in identities that are built to
            keep working long after launch day.
          </p>
        </div>

        <p className="sep">* * *</p>

        <div>
          {timeline.map((item) => (
            <div className="row" key={item.title}>
              <span>{item.when}</span>
              <div>
                <div>{item.title}</div>
                <div className="tags">{item.tags}</div>
              </div>
            </div>
          ))}
        </div>

        <p className="sep">* * *</p>

        <div className="stack">
          <p>
            Currently, we are building out the Toothless identity system and
            taking on a small number of new projects. Past collaborations
            include{" "}
            <Link href="/work/client-project-01">Client 01</Link>,{" "}
            <Link href="/work/client-project-02">Client 02</Link>,{" "}
            <Link href="/work/client-project-03">Client 03</Link> and{" "}
            <Link href="/work/client-project-04">Client 04</Link>.
          </p>
          <p>
            Outside of client work, you’ll find us sketching marks,{" "}
            <Link href="/studio">experimenting with new tools</Link>, or
            exploring new ways of making things.
            <br />
            <Link href="/studio">Studio</Link>{" "}
            <Link href="/contact">Contact</Link>
            <br />
            <a href={`mailto:${EMAIL}`}>EMAIL</a>
          </p>
        </div>

        <p className="sep">* * *</p>

        <div className="foot" style={{ marginTop: 0 }}>
          <ProjectsOverlay label="My Work" />
          <span className="foot-caps">Updated Oct, 2026</span>
        </div>
      </div>
    </main>
  );
}

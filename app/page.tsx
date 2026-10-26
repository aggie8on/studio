import Link from "next/link";
import { EMAIL, projects } from "../lib/projects";

export default function Home() {
  return (
    <main className="page">
      <div className="col text">
        <header className="masthead">
          <Link className="wordmark" href="/" aria-label="Toothless home">Toothless<span className="period">.</span></Link>
          <a className="email-link" href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </header>

        <section className="intro" aria-labelledby="intro-title">
          <p className="eyebrow">Independent creative studio · Uganda / Worldwide</p>
          <h1 id="intro-title">Logos, identity &amp; systems.</h1>
          <p className="lead">
            We build identities that give good ideas a clear shape — from the first mark
            to the system that carries it into the world.
          </p>
        </section>

        <section className="story" aria-label="About Toothless">
          <p>
            Toothless is an independent creative studio working at the intersection of
            strategy and visual identity. We partner with people building something
            meaningful and help them make it recognisable, coherent and hard to forget.
          </p>
          <p>
            A logo is only the beginning. We think about the language around it, the
            rules that hold it together and the real places it needs to work — on a
            screen, on a package, in a room or out in the world.
          </p>
          <p>
            Small by design, collaborative by nature. One considered system, made with
            care from the first conversation to the final files.
          </p>
        </section>

        <section className="work-section" aria-labelledby="work-title">
          <div className="section-heading">
            <h2 id="work-title">Selected work</h2>
            <Link href="/work">View archive <span aria-hidden="true">↗</span></Link>
          </div>
          <ul className="work-list">
            {projects.map((project, index) => (
              <li key={project.slug}>
                <Link href={`/work/${project.slug}`} className="work-item">
                  <span className="work-number">{String(index + 1).padStart(2, "0")}</span>
                  <span className="work-copy">
                    <span className="work-title">{project.title}</span>
                    <span className="work-description">{project.description}</span>
                  </span>
                  <span className="work-meta">{project.year}<span aria-hidden="true">↗</span></span>
                </Link>
              </li>
            ))}
          </ul>
          <p className="note">More work will be added as projects are ready to share.</p>
        </section>

        <section className="services-section" aria-labelledby="services-title">
          <h2 id="services-title">What we do</h2>
          <ul className="service-list">
            <li><span>01</span><div><h3>Brand foundations</h3><p>Positioning, direction and the idea that gives a brand purpose.</p></div></li>
            <li><span>02</span><div><h3>Logo &amp; identity</h3><p>Distinctive marks and a visual language with room to grow.</p></div></li>
            <li><span>03</span><div><h3>Identity systems</h3><p>Type, colour, layout and guidelines made for everyday use.</p></div></li>
            <li><span>04</span><div><h3>Art direction</h3><p>A consistent point of view across the places your brand shows up.</p></div></li>
          </ul>
        </section>

        <section className="contact-section" aria-labelledby="contact-title">
          <p className="eyebrow">Have something in mind?</p>
          <h2 id="contact-title">Let’s make it mean something.</h2>
          <p>Tell us what you’re building, where you want to take it, or what needs to change.</p>
          <a className="contact-link" href={`mailto:${EMAIL}`}>Start a conversation <span aria-hidden="true">↗</span></a>
        </section>

        <footer className="site-footer">
          <Link className="footer-mark" href="/">Toothless<span className="period">.</span></Link>
          <span>Logos, identity &amp; systems.</span>
          <span>Uganda · Working worldwide</span>
          <span>© {new Date().getFullYear()} Toothless</span>
        </footer>
      </div>
    </main>
  );
}

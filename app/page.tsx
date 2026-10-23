const projects = [
  { slug: "toothless-studio", title: "Toothless Studio", type: "Identity & systems", year: "2026", image: "/brand/logos/toothless-02.svg", featured: true },
  { slug: "client-project-01", title: "Client project 01", type: "Brand identity", year: "Coming soon", image: "https://images.unsplash.com/photo-1547887538-e3a2f32cb1cc?auto=format&fit=crop&w=1200&q=85" },
  { slug: "client-project-02", title: "Client project 02", type: "Visual identity", year: "Coming soon", image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?auto=format&fit=crop&w=1200&q=85" },
];
export default function Home() {
  return <main className="rd-home">
    <header className="rd-header page-shell">
      <a href="/" className="rd-brand" aria-label="Toothless home"><img src="/brand/logos/toothless-02.svg" alt="Toothless" /></a>
      <nav aria-label="Main navigation"><a href="#work">Work</a><a href="/studio">Studio</a><a href="mailto:hi@toothless.design">Contact ↗</a></nav>
    </header>
    <section className="rd-intro page-shell">
      <p className="rd-kicker"><span className="rd-dot" /> Independent creative studio · Available for select projects</p>
      <h1>Toothless is a creative studio making <em>logos, identity & systems.</em></h1>
      <div className="rd-intro-bottom"><p>We build clear, distinctive identities for people and businesses with something to say.</p><a href="#work">Explore selected work <span>↓</span></a></div>
    </section>
    <section id="work" className="rd-work page-shell">
      <div className="rd-section-heading"><span>Selected work</span><span>2024 — 2026</span></div>
      <div className="rd-project-list">{projects.map((project, i) => <a className="rd-project" href={"/work/" + project.slug} key={project.slug}>
        <div className={"rd-project-visual rd-project-visual-" + i}>{i === 0 ? <div className="rd-toothless-mark"><img src={project.image} alt="" /><span>Identity, in practice.</span></div> : <img src={project.image} alt="" loading="lazy" />}</div>
        <div className="rd-project-meta"><span className="rd-project-index">0{i + 1}</span><h2>{project.title}</h2><span>{project.type}</span><span>{project.year}</span><span className="rd-project-arrow">↗</span></div>
      </a>)}</div>
      <p className="rd-note">Some project names and imagery are temporary placeholders and will be replaced with approved work.</p>
    </section>
    <section className="rd-studio-band"><div className="page-shell rd-studio-inner"><span className="rd-section-label">A little about us</span><div><h2>Small by design.<br/><em>Clear by nature.</em></h2><p>Toothless works at the intersection of strategy and visual craft. We make identities that are considered, useful and built to last — from the first mark to the full system.</p><a href="/studio">More about the studio ↗</a></div></div></section>
    <section className="rd-services page-shell"><div className="rd-section-heading"><span>What we do</span><span>01 — 03</span></div><div className="rd-service-list"><div><span>01</span><h3>Logos & identity</h3><p>Distinctive marks and visual languages that give a brand a recognisable point of view.</p></div><div><span>02</span><h3>Identity systems</h3><p>Typography, colour, layout and guidelines designed to work across real touchpoints.</p></div><div><span>03</span><h3>Art direction</h3><p>A coherent visual direction that brings every part of the brand together.</p></div></div></section>
    <footer className="rd-footer"><div className="page-shell"><div className="rd-section-heading"><span>Have something in mind?</span><span>Toothless®</span></div><h2>Let’s make it <em>matter.</em></h2><a className="rd-email" href="mailto:hi@toothless.design">hi@toothless.design ↗</a><div className="rd-footer-bottom"><span>Logos, identity & systems.</span><span>Independent creative studio</span><span>© {new Date().getFullYear()} Toothless</span></div></div></footer>
  </main>;
}
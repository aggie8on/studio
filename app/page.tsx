import Link from "next/link";
import { EMAIL } from "../lib/projects";

const projects = [
  { slug: "flash-trade", title: "Flash Trade", type: "Motion", description: "A launch film built around the energy of the product.", art: "flash", visual: "PNL", sub: "$44,178" },
  { slug: "shaderweb", title: "Shaderweb", type: "Design", description: "A visual identity made to move, adapt and live inside the product.", art: "shader" },
  { slug: "hydex", title: "Hydex", type: "Motion", description: "A logo animation built to open decks and social posts.", art: "hydex" },
  { slug: "world", title: "world.", type: "Experiments", description: "A globe that collects what one word means to people.", art: "world" },
  { slug: "coinbase", title: "Coinbase, redesigned", type: "Experiments", description: "A fresh visual direction for a familiar product.", art: "coinbase" },
  { slug: "radiants", title: "Radiants", type: "Direction", description: "An event identity and campaign system for Solana Mobile.", art: "radiants" },
];

function ProjectArt({ art, visual, sub }: { art: string; visual?: string; sub?: string }) {
  return <div className={`project-art art-${art}`} aria-hidden="true">
    {art === "flash" && <div className="trade-ui"><span className="candles">▂ ▄ ▆ ▇ ▅ ▇ ▆</span><strong>{visual}</strong><b>{sub}</b></div>}
    {art === "shader" && <div className="shader-ui"><div className="shader-panel"><span>Copy embed</span></div><div className="shader-green">✳</div></div>}
    {art === "hydex" && <div className="hydex-mark">H<span>Y</span></div>}
    {art === "world" && <div className="globe"><span>world.</span></div>}
    {art === "coinbase" && <div className="coin-ui"><b>coinbase</b><span>↗</span></div>}
    {art === "radiants" && <div className="radiants-ui"><b>RADIANTS</b><span>SOLANA MOBILE</span></div>}
  </div>;
}

export default function Home() {
  return <main className="rizzy-shell">
    <aside className="profile-rail">
      <div className="profile-top">
        <div className="avatar" aria-hidden="true">T</div>
        <div><h1>Toothless<span className="verified">✦</span></h1><p className="role">LOGOS, IDENTITY &amp; SYSTEMS</p></div>
      </div>
      <div className="bio">
        <p>Independent by design. Built to leave a mark.</p>
        <p>Toothless is a creative studio working across identity, motion and digital experiences. We bring a clear point of view to the things people see, use and remember.</p>
        <p>From the first mark to the system around it, every detail has a job. The goal is work that feels distinct, useful and hard to mistake for anything else.</p>
        <p>Small studio. Considered work. One point of contact from first conversation to final delivery.</p>
        <p className="booking"><a href={`mailto:${EMAIL}?subject=Project%20enquiry`}>Start a project</a>, or reach us by <a href={`mailto:${EMAIL}`}>email</a>.</p>
      </div>
      <div className="rail-bottom">
        <div className="sound-row"><span className="sound-symbol">••</span><span>● SOUND</span></div>
        <nav className="rail-links"><a href="#references">REFERENCES</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></nav>
        <div className="testimonial" id="references"><p>Good work should be clear, distinctive and made with care. We build identities that carry an idea all the way into the world.</p><span>TOOTHLESS · STUDIO NOTE</span><div className="quote-arrows">←　→</div></div>
      </div>
    </aside>
    <section className="work-area">
      <header className="work-head"><p>SELECTED WORK <span>·</span> 6 PIECES</p><Link href="/work">Works <span aria-hidden="true">→</span></Link></header>
      <div className="project-grid">
        {projects.map(project => <Link className="project-card" href={`/work/${project.slug}`} key={project.slug}>
          <ProjectArt art={project.art} visual={project.visual} sub={project.sub}/>
          <div className="project-meta"><span>{project.title.toUpperCase()}</span><span>{project.type.toUpperCase()}</span></div>
          <p className="project-description">{project.description}</p>
        </Link>)}
      </div>
      <footer className="work-footer"><span>TOOTHLESS · INDEPENDENT CREATIVE STUDIO</span><a href={`mailto:${EMAIL}`}>{EMAIL} ↗</a></footer>
    </section>
  </main>;
}

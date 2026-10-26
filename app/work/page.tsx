import Link from "next/link";

export const metadata = {
  title: "Design — Toothless",
  description: "Selected design work by Toothless.",
};

const categories = [
  { name: "Design", count: "92", active: true },
  { name: "Motion", count: "5" },
  { name: "Product", count: "30" },
  { name: "Direction", count: "110" },
  { name: "Experiments", count: "35" },
];

const pieces = [
  { title: "Shaderweb", kind: "identity", className: "tile-shader", href: "/work/shaderweb" },
  { title: "One place is enough to control.", kind: "product", className: "tile-purple", href: "/work/coinbase" },
  { title: "My library", kind: "identity", className: "tile-library", href: "/work/flash-trade" },
  { title: "Riz Jr.", kind: "product", className: "tile-game", href: "/work/world" },
  { title: "Build in public", kind: "art direction", className: "tile-build", href: "/work/radiants" },
  { title: "Be rad. Go to the mountains.", kind: "art direction", className: "tile-mountain", href: "/work/radiants" },
  { title: "Radiants", kind: "campaign", className: "tile-radiants", href: "/work/radiants" },
  { title: "Hydex", kind: "identity", className: "tile-hydex", href: "/work/hydex" },
  { title: "Flash Trade", kind: "motion", className: "tile-flash", href: "/work/flash-trade" },
];

function MiniMosaic() {
  return <div className="archive-mosaic" aria-label="Preview of selected portfolio work">
    {Array.from({ length: 72 }, (_, i) => <span key={i} className={`mosaic-cell mosaic-${i % 12}`} />)}
  </div>;
}

export default function WorkPage() {
  return <main className="archive-shell">
    <aside className="archive-rail">
      <Link href="/" className="archive-profile">
        <div className="avatar" aria-hidden="true">T</div>
        <div><strong>Toothless<span className="verified">✦</span></strong><small>LOGOS, IDENTITY &amp; SYSTEMS</small></div>
      </Link>
      <div className="mosaic-label"><span>BRAND ART</span><span>1 / 92</span></div>
      <MiniMosaic />
      <div className="archive-rail-bottom">
        <div className="sound-row"><span className="sound-symbol">••</span><span>● SOUND</span></div>
        <nav className="rail-links"><a href="#references">REFERENCES</a><a href="https://www.instagram.com/" target="_blank" rel="noreferrer">INSTAGRAM ↗</a><a href="https://www.linkedin.com/" target="_blank" rel="noreferrer">LINKEDIN ↗</a></nav>
      </div>
    </aside>
    <section className="archive-main">
      <nav className="archive-tabs" aria-label="Work categories">
        <Link className="archive-home" href="/">← HOME</Link>
        {categories.map(cat => <a href={`#${cat.name.toLowerCase()}`} className={cat.active ? "active" : ""} key={cat.name}>{cat.name}<small>{cat.count}</small></a>)}
      </nav>
      <div className="archive-content">
        <header className="archive-title">
          <h1>Design</h1>
          <p>Brand · Illustration · Decks</p>
        </header>
        <div className="archive-intro"><span>BRAND ART</span><p>Illustration, photo treatment, product and identity work, across client brands and my own.</p></div>
        <div className="archive-gallery">
          {pieces.map(piece => <Link href={piece.href} key={piece.title} className={`archive-tile ${piece.className}`}>
            <div className="tile-art" aria-hidden="true">
              {piece.className === "tile-shader" && <div className="shader-collage"><i/><i/><i/></div>}
              {piece.className === "tile-purple" && <span>One place is<br/>enough<br/>to control.</span>}
              {piece.className === "tile-library" && <div className="library-books"><i>RIF</i><i>WAVY</i><i>HYDEX</i><i>▰</i></div>}
              {piece.className === "tile-game" && <div className="game-panel">Riz Jr.<br/><small>♥ ♥ ♥ ♥ ♡</small><p>Hunger　 ▰▰▰▰</p><p>Energy　 ▰▰</p></div>}
              {piece.className === "tile-build" && <span>build in public</span>}
              {piece.className === "tile-mountain" && <span>be rad.<br/>go to the mountains.</span>}
              {piece.className === "tile-radiants" && <span>RADIANTS ✳<small>one of the hottest places on Solana.</small></span>}
              {piece.className === "tile-hydex" && <span>HYDEX</span>}
              {piece.className === "tile-flash" && <span>PNL　$44,178</span>}
            </div>
            <span className="tile-caption">{piece.title}<small>{piece.kind}</small></span>
          </Link>)}
        </div>
      </div>
    </section>
  </main>;
}

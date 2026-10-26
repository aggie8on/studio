import Link from "next/link";
import PageFoot from "../../components/page-foot";
import TopBar from "../../components/top-bar";

export const metadata = {
  title: "Studio",
  description: "How Toothless approaches identity, systems and creative direction.",
};

const services = [
  ["Brand foundations", "Positioning, direction and the idea that gives an identity purpose."],
  ["Logo & identity", "Distinctive marks and a visual language with room to grow."],
  ["Identity systems", "Typography, colour, layout and guidelines designed for real use."],
  ["Art direction", "A consistent point of view across the places a brand appears."],
];

const steps = [
  ["Listen", "Understand the business, its people and the problem before reaching for a visual answer."],
  ["Define", "Find the clearest idea and agree on a useful creative direction."],
  ["Design", "Explore, build and refine the identity across the touchpoints that matter."],
  ["Deliver", "Prepare a practical system and the files needed to put it to work."],
];

export default function StudioPage() {
  return (
    <main className="page">
      <div className="col text">
        <TopBar current="studio" />
        <section className="inner-intro">
          <p className="eyebrow">A little about us</p>
          <h1>Good design makes the right thing clear.</h1>
          <p>
            Toothless is an independent creative studio focused on logos,
            identity and systems. We help good ideas find a shape, a voice and
            a visual language that can hold up beyond launch day.
          </p>
        </section>
        <section className="services-section">
          <h2>What we do</h2>
          <ul className="service-list">
            {services.map(([title, description], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ul>
        </section>
        <section className="services-section">
          <h2>How we work</h2>
          <ul className="service-list">
            {steps.map(([title, description], index) => (
              <li key={title}>
                <span>{String(index + 1).padStart(2, "0")}</span>
                <div><h3>{title}</h3><p>{description}</p></div>
              </li>
            ))}
          </ul>
        </section>
        <section className="contact-section">
          <p className="eyebrow">Start with a conversation</p>
          <h2>Have a good idea?</h2>
          <p>We’d love to hear what you’re working on.</p>
          <Link className="contact-link" href="/contact">Tell us about it <span aria-hidden="true">↗</span></Link>
        </section>
        <PageFoot />
      </div>
    </main>
  );
}

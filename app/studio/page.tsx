import PageFoot from "../../components/page-foot";
import TopBar from "../../components/top-bar";

export const metadata = { title: "Studio — Toothless" };

// Placeholder copy — edit freely.
const services = [
  ["Brand foundations", "Positioning, direction and the central idea that gives an identity purpose."],
  ["Logo & identity", "Distinctive marks and a visual language built to feel unmistakably yours."],
  ["Identity systems", "Typography, colour, layout and guidelines that work across real touchpoints."],
  ["Art direction", "A considered visual point of view for the way your brand shows up."],
];

const steps = [
  ["Listen", "Understand the business, people and problem before reaching for a visual answer."],
  ["Define", "Find the most useful idea and agree on a clear creative direction."],
  ["Design", "Explore, build and refine the identity across the touchpoints that matter."],
  ["Deliver", "Hand over a practical system and the assets needed to put it to work."],
];

export default function StudioPage() {
  return (
    <main className="page">
      <TopBar current="studio" />

      <div className="col text">
        <strong>Studio</strong>
        <div className="stack" style={{ marginTop: "1.1em" }}>
          <p>
            Toothless is an independent creative studio focused on logos,
            identity and systems — turning sharp ideas into thoughtful brands
            built to work beyond the first impression.
          </p>
          <p>
            Good design isn’t decoration. It’s a way to make the right thing
            clear.
          </p>
        </div>

        <p className="sep">* * *</p>

        <p className="eyebrow">What we do</p>
        {services.map(([title, text]) => (
          <div className="row" key={title}>
            <span className="muted">—</span>
            <div>
              <div>{title}</div>
              <div className="muted">{text}</div>
            </div>
          </div>
        ))}

        <p className="sep">* * *</p>

        <p className="eyebrow">How we work</p>
        {steps.map(([title, text], i) => (
          <div className="row" key={title}>
            <span className="muted">{String(i + 1).padStart(2, "0")}</span>
            <div>
              <div>{title}</div>
              <div className="muted">{text}</div>
            </div>
          </div>
        ))}
      </div>

      <PageFoot />
    </main>
  );
}

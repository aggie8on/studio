import { EMAIL } from "../lib/projects";

export default function PageFoot() {
  return (
    <footer className="foot">
      <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
      <span className="muted">© {new Date().getFullYear()} Toothless</span>
    </footer>
  );
}

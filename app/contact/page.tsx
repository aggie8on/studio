import PageFoot from "../../components/page-foot";
import TopBar from "../../components/top-bar";
import { EMAIL } from "../../lib/projects";
import ContactForm from "./contact-form";

export const metadata = { title: "Contact — Toothless" };

export default function ContactPage() {
  return (
    <main className="page">
      <TopBar current="contact" />

      <div className="col text">
        <strong>Contact</strong>
        <p style={{ marginTop: "1.1em" }}>
          Tell us what you’re building, what’s not working, or what you’d like
          your brand to become. Prefer email? <a href={`mailto:${EMAIL}`}>{EMAIL}</a>
        </p>
        <ContactForm />
      </div>

      <PageFoot />
    </main>
  );
}

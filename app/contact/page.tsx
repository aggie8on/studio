import Link from "next/link";
import PageFoot from "../../components/page-foot";
import TopBar from "../../components/top-bar";
import { EMAIL } from "../../lib/projects";
import ContactForm from "./contact-form";

export const metadata = {
  title: "Contact",
  description: "Start a project conversation with Toothless creative studio.",
};

export default function ContactPage() {
  return (
    <main className="page">
      <div className="col text">
        <TopBar current="contact" />
        <section className="inner-intro">
          <p className="eyebrow">Project enquiries</p>
          <h1>Let’s talk about what you’re making.</h1>
          <p>
            Share a little about your project, what you need and where you’d
            like to take it. Prefer email? <a href={`mailto:${EMAIL}`}>{EMAIL}</a>.
          </p>
        </section>
        <ContactForm />
        <p className="note">Not quite sure what you need yet? That’s fine — we can start there.</p>
        <p className="note"><Link href="/studio">Learn about the studio <span aria-hidden="true">↗</span></Link></p>
        <PageFoot />
      </div>
    </main>
  );
}

"use client";
import { FormEvent, useState } from "react";

type SubmissionState = "idle" | "sending" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<SubmissionState>("idle");
  const [feedback, setFeedback] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("sending");
    setFeedback("");
    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());

    try {
      const response = await fetch("https://formsubmit.co/ajax/hi@toothless.design", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          ...payload,
          _subject: "New project enquiry — Toothless Studio",
          _template: "table",
          _captcha: "true",
        }),
      });
      const result = await response.json();
      if (!response.ok || String(result.success) !== "true") {
        const message = String(result.message || "");
        if (/activat/i.test(message)) {
          throw new Error("One-time setup: check hi@toothless.design for FormSubmit’s activation email and confirm the form. Then submissions will arrive here.");
        }
        throw new Error(message || "The message could not be sent.");
      }
      setStatus("success");
      setFeedback("Thanks for reaching out. Your message has been sent.");
      form.reset();
    } catch (error) {
      setStatus("error");
      setFeedback(error instanceof Error && error.message
        ? error.message
        : "We couldn’t send your message just now. Please email hi@toothless.design directly.");
    }
  }

  return (
    <form className="contact-form" onSubmit={handleSubmit}>
      <label><span>Name *</span><input autoComplete="name" name="name" placeholder="Your name" required /></label>
      <label><span>Email *</span><input autoComplete="email" name="email" type="email" placeholder="you@company.com" required /></label>
      <label><span>Company / brand</span><input autoComplete="organization" name="company" placeholder="Optional" /></label>
      <label>
        <span>What do you need?</span>
        <select name="service" defaultValue="">
          <option value="" disabled>Select a service</option>
          <option>Logo design</option>
          <option>Brand identity</option>
          <option>Identity system</option>
          <option>Brand refresh</option>
          <option>Something else</option>
        </select>
      </label>
      <label><span>Project *</span><textarea name="message" placeholder="What are you building, and what would you like help with?" rows={5} required /></label>
      <input type="text" name="_honey" tabIndex={-1} autoComplete="off" className="contact-honey" aria-hidden="true" />
      <div className="contact-actions">
        <button type="submit" disabled={status === "sending"}>{status === "sending" ? "Sending…" : "Send"}</button>
        <p aria-live="polite" className={"feedback " + status}>{feedback}</p>
      </div>
    </form>
  );
}

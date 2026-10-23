"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import { projects } from "../lib/projects";

export default function ProjectsOverlay({ label = "My Work" }: { label?: string }) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    if (!open) return;
    const onKey = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const previous = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    document.addEventListener("keydown", onKey);
    return () => {
      document.body.style.overflow = previous;
      document.removeEventListener("keydown", onKey);
    };
  }, [open]);

  return (
    <>
      <button type="button" className="link" aria-haspopup="dialog" aria-expanded={open} onClick={() => setOpen(true)}>
        {label}
      </button>
      {open && (
        <div className="overlay" role="dialog" aria-modal="true" aria-label="Selected work">
          <div className="overlay-content text">
            <div className="overlay-bar">
              <strong>Selected work</strong>
              <button type="button" className="link" autoFocus onClick={() => setOpen(false)}>
                Close ×
              </button>
            </div>
            <p className="sep">* * *</p>
            <ul className="overlay-list">
              {projects.map((project, index) => (
                <li key={project.slug}>
                  <Link href={`/work/${project.slug}`} className="overlay-item">
                    <span className="overlay-title">{project.title}</span>
                    <span className="overlay-tags">{project.tags.join(" • ")}</span>
                    <span className="overlay-year">{project.year}</span>
                  </Link>
                </li>
              ))}
            </ul>
            <p className="sep">* * *</p>
            <p><Link href="/work" onClick={() => setOpen(false)}>Open work archive →</Link></p>
          </div>
        </div>
      )}
    </>
  );
}

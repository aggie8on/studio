import Link from "next/link";

type Current = "work" | "studio" | "contact";

export default function TopBar({ current }: { current?: Current }) {
  const item = (href: string, label: string, key: Current) => (
    <Link href={href} aria-current={current === key ? "page" : undefined}>
      {label}
    </Link>
  );

  return (
    <header className="top">
      <Link href="/" className="top-name">
        Toothless
      </Link>
      <nav aria-label="Main navigation" className="top-nav">
        {item("/work", "Work", "work")}
        {item("/studio", "Studio", "studio")}
        {item("/contact", "Contact", "contact")}
      </nav>
    </header>
  );
}

import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "Toothless — Logos, identity & systems",
    template: "%s — Toothless",
  },
  description:
    "Toothless is an independent creative studio in Uganda building logos, identities and systems for people with something to say.",
  applicationName: "Toothless",
  icons: {
    icon: "/brand/logos/toothless-01.svg",
  },
  openGraph: {
    title: "Toothless — Logos, identity & systems",
    description:
      "An independent creative studio building logos, identities and systems.",
    type: "website",
    siteName: "Toothless",
  },
  twitter: {
    card: "summary",
    title: "Toothless — Logos, identity & systems",
    description:
      "An independent creative studio building logos, identities and systems.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

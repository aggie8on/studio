import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Toothless",
  description:
    "Toothless is an independent creative studio making logos, identity and systems.",
  applicationName: "Toothless",
  icons: {
    icon: "/brand/icons/toothless-10.svg",
  },
  openGraph: {
    title: "Toothless",
    description:
      "An independent creative studio making logos, identity and systems.",
    type: "website",
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

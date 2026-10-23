import Link from "next/link";

export default function NotFound() {
  return (
    <main className="nf text">
      <strong>404</strong>
      <p>This page doesn’t seem to exist.</p>
      <p style={{ marginTop: "1.1em" }}>
        <Link href="/">Back home</Link>
      </p>
    </main>
  );
}

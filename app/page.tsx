import Link from "next/link";

export default function HomePage() {
  return (
    <main style={{ padding: "2rem", fontFamily: "Arial, sans-serif" }}>
      <h1>Personal Finance Lab</h1>
      <p>Local content site rebuilt with Next.js.</p>

      <ul>
        <li>
          <Link href="/lessons">Lessons</Link>
        </li>
        <li>
          <Link href="/videos">Videos</Link>
        </li>
      </ul>
    </main>
  );
}
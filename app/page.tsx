import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <h1>Welcome to Personal Finance Lab</h1>
        <p>Master your finances with interactive lessons and educational videos.</p>
      </section>

      <section className="content-cards">
        <Link href="/lessons" className="content-card">
          <h2>Lessons</h2>
          <p>In-depth articles covering budgeting, investing, insurance, taxes, and more.</p>
        </Link>
        <Link href="/videos" className="content-card">
          <h2>Videos</h2>
          <p>Watch and learn with our collection of personal finance video tutorials.</p>
        </Link>
      </section>
    </main>
  );
}

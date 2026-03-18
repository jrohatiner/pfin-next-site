import Link from "next/link";

export default function HomePage() {
  return (
    <main className="home-page">
      <section className="hero">
        <h1>Welcome to IFi Labs</h1>
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
        <Link href="/dashboard/student" className="content-card">
          <h2>Student Account</h2>
          <p>Access your classroom, track your progress, and take quizzes.</p>
        </Link>
        <Link href="/dashboard/teacher" className="content-card">
          <h2>Teacher Account</h2>
          <p>Manage your classrooms, share session codes, and monitor student progress.</p>
        </Link>
      </section>

      <section className="auth-links">
        <Link href="/auth/login" className="auth-button login">
          Log In
        </Link>
        <Link href="/auth/sign-up" className="auth-button signup">
          Sign Up
        </Link>
      </section>
    </main>
  );
}

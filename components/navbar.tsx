import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="navbar-brand">
          IFi Labs
        </Link>
        <div className="navbar-links">
          <Link href="/lessons">Lessons</Link>
          <Link href="/videos">Videos</Link>
          <Link href="/dashboard/student">Student</Link>
          <Link href="/dashboard/teacher">Teacher</Link>
          <Link href="/auth/login" className="navbar-login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

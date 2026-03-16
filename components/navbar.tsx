import Link from "next/link";

export function Navbar() {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <Link href="/" className="navbar-brand">
          Personal Finance Lab
        </Link>
        <div className="navbar-links">
          <Link href="/lessons">Lessons</Link>
          <Link href="/videos">Videos</Link>
        </div>
      </div>
    </nav>
  );
}

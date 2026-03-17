import Link from "next/link";

export function PageFooter() {
  return (
    <footer className="page-footer">
      <Link href="/" className="nav-home">
        ← Back to Home
      </Link>
    </footer>
  );
}

import Link from "next/link";

interface ContentNavProps {
  prevSlug?: string | null;
  nextSlug?: string | null;
  prevTitle?: string | null;
  nextTitle?: string | null;
  basePath: string; // "/lessons" or "/videos"
}

export function ContentNav({
  prevSlug,
  nextSlug,
  prevTitle,
  nextTitle,
  basePath,
}: ContentNavProps) {
  return (
    <footer className="content-nav">
      <div className="content-nav-inner">
        {prevSlug ? (
          <Link href={`${basePath}/${prevSlug}`} className="nav-link nav-prev">
            <span className="nav-label">Previous</span>
            <span className="nav-title">{prevTitle}</span>
          </Link>
        ) : (
          <div />
        )}

        <Link href="/" className="nav-link nav-home">
          Home
        </Link>

        {nextSlug ? (
          <Link href={`${basePath}/${nextSlug}`} className="nav-link nav-next">
            <span className="nav-label">Next</span>
            <span className="nav-title">{nextTitle}</span>
          </Link>
        ) : (
          <div />
        )}
      </div>
    </footer>
  );
}

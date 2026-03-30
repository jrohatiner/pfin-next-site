'use client'

import Link from "next/link";
import { useTheme } from "@/lib/theme/ThemeProvider";

export function Navbar() {
  const { theme, toggleTheme } = useTheme();

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
          <button
            onClick={toggleTheme}
            className="navbar-theme-toggle"
            aria-label="Toggle theme"
            title={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          >
            {theme === 'light' ? '🌙' : '☀️'}
          </button>
          <Link href="/auth/login" className="navbar-login">
            Login
          </Link>
        </div>
      </div>
    </nav>
  );
}

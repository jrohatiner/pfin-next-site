import Link from 'next/link'

export default async function Page({
  searchParams,
}: {
  searchParams: Promise<{ error: string }>
}): Promise<JSX.Element> {
  const params = await searchParams

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <div style={styles.iconContainer}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#f44336">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-2h2v2zm0-4h-2V7h2v6z"/>
            </svg>
          </div>
          <h1 style={styles.title}>Sorry, something went wrong.</h1>
          {params?.error ? (
            <p style={styles.text}>Code error: {params.error}</p>
          ) : (
            <p style={styles.text}>An unspecified error occurred.</p>
          )}
          <Link href="/auth/login" style={styles.link}>
            Return to Login
          </Link>
        </div>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5f5',
    padding: '2rem 1rem',
  },
  wrapper: {
    width: '100%',
    maxWidth: '400px',
  },
  card: {
    background: '#ffffff',
    border: '3px solid #f1f1f1',
    borderRadius: '8px',
    padding: '2rem',
    textAlign: 'center',
  },
  iconContainer: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#fef2f2',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1a1a2e',
    margin: '0 0 1rem 0',
  },
  text: {
    fontSize: '0.9rem',
    color: '#888',
    lineHeight: '1.5',
    margin: '0 0 1.5rem 0',
  },
  link: {
    display: 'inline-block',
    background: '#0b57d0',
    color: '#fff',
    padding: '0.75rem 1.5rem',
    borderRadius: '6px',
    textDecoration: 'none',
    fontWeight: '600',
  },
}

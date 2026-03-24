export default function Page(): JSX.Element {
  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <div style={styles.card}>
          <div style={styles.iconContainer}>
            <svg width="48" height="48" viewBox="0 0 24 24" fill="#04AA6D">
              <path d="M9 16.17L4.83 12l-1.42 1.41L9 19 21 7l-1.41-1.41z"/>
            </svg>
          </div>
          <h1 style={styles.title}>Thank you for signing up!</h1>
          <p style={styles.description}>Check your email to confirm</p>
          <p style={styles.text}>
            You have successfully signed up. Please check your email to confirm your account before signing in.
          </p>
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
    background: '#f0fdf4',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: '1rem',
  },
  title: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    color: '#1a1a2e',
    margin: '0 0 0.5rem 0',
  },
  description: {
    fontSize: '1rem',
    color: '#666',
    margin: '0 0 1rem 0',
  },
  text: {
    fontSize: '0.9rem',
    color: '#888',
    lineHeight: '1.5',
    margin: 0,
  },
}

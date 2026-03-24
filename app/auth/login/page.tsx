'use client'

import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export default function Page() {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(true)
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter()

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault()
    const supabase = createClient()
    setIsLoading(true)
    setError(null)

    try {
      const { error, data } = await supabase.auth.signInWithPassword({
        email,
        password,
      })
      if (error) throw error

      if (data.user) {
        const { data: profile } = await supabase
          .from('profiles')
          .select('role, pre_test_completed')
          .eq('id', data.user.id)
          .single()

        if (profile?.role === 'teacher') {
          router.push('/dashboard/teacher')
        } else if (profile?.role === 'student') {
          router.push(profile.pre_test_completed ? '/dashboard/student' : '/pre-test')
        } else {
          router.push('/dashboard')
        }
      }
    } catch (error: unknown) {
      setError(error instanceof Error ? error.message : 'An error occurred')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <h2 style={styles.heading}>IFi Labs Login</h2>
        <form onSubmit={handleLogin} style={styles.form}>
          {/* Avatar */}
          <div style={styles.imgcontainer}>
            <div style={styles.avatarCircle}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>

          {/* Fields */}
          <div style={styles.container}>
            <label htmlFor="email" style={styles.label}><b>Email</b></label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              disabled={isLoading}
            />

            <label htmlFor="password" style={styles.label}><b>Password</b></label>
            <input
              id="password"
              type="password"
              placeholder="Enter Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              disabled={isLoading}
            />

            {error && <p style={styles.error}>{error}</p>}

            <button type="submit" style={styles.submitBtn} disabled={isLoading}>
              {isLoading ? 'Logging in...' : 'Login'}
            </button>

            <label style={styles.rememberLabel}>
              <input
                type="checkbox"
                checked={remember}
                onChange={(e) => setRemember(e.target.checked)}
                style={{ marginRight: '6px' }}
              />
              Remember me
            </label>
          </div>

          {/* Footer */}
          <div style={styles.footer}>
            <Link href="/" style={styles.cancelBtn}>Cancel</Link>
            <span style={styles.forgotSpan}>
              <Link href="/auth/sign-up" style={styles.link}>Create account</Link>
              {' · '}
              <Link href="/auth/reset-password" style={styles.link}>Forgot password?</Link>
            </span>
          </div>
        </form>
      </div>
    </div>
  )
}

const styles: Record<string, React.CSSProperties> = {
  page: {
    fontFamily: 'Arial, Helvetica, sans-serif',
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    background: '#f5f5f5',
    padding: '2rem 1rem',
  },
  wrapper: {
    width: '100%',
    maxWidth: '400px',
  },
  heading: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    marginBottom: '1rem',
    color: '#1a1a2e',
    textAlign: 'center',
  },
  form: {
    border: '3px solid #f1f1f1',
    borderRadius: '8px',
    background: '#ffffff',
    overflow: 'hidden',
  },
  imgcontainer: {
    textAlign: 'center',
    margin: '24px 0 12px 0',
  },
  avatarCircle: {
    width: '80px',
    height: '80px',
    borderRadius: '50%',
    background: '#04AA6D',
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container: {
    padding: '16px',
  },
  label: {
    display: 'block',
    marginBottom: '4px',
    color: '#333',
    fontSize: '0.95rem',
  },
  input: {
    width: '100%',
    padding: '12px 20px',
    margin: '8px 0 16px 0',
    display: 'block',
    border: '1px solid #ccc',
    borderRadius: '4px',
    boxSizing: 'border-box',
    fontSize: '1rem',
  },
  error: {
    color: '#f44336',
    fontSize: '0.875rem',
    margin: '0 0 8px 0',
  },
  submitBtn: {
    background: '#04AA6D',
    color: '#ffffff',
    padding: '14px 20px',
    margin: '8px 0',
    border: 'none',
    cursor: 'pointer',
    width: '100%',
    fontSize: '1rem',
    fontWeight: '600',
    borderRadius: '4px',
    opacity: 1,
  },
  rememberLabel: {
    display: 'flex',
    alignItems: 'center',
    marginTop: '8px',
    fontSize: '0.9rem',
    color: '#555',
  },
  footer: {
    padding: '16px',
    background: '#f1f1f1',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    flexWrap: 'wrap',
    gap: '8px',
  },
  cancelBtn: {
    padding: '10px 18px',
    background: '#f44336',
    color: '#ffffff',
    borderRadius: '4px',
    textDecoration: 'none',
    fontSize: '0.9rem',
    fontWeight: '600',
  },
  forgotSpan: {
    fontSize: '0.875rem',
    color: '#555',
  },
  link: {
    color: '#0b57d0',
    textDecoration: 'none',
  },
}

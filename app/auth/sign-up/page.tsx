'use client'

import { useState } from 'react'
import { createClient } from '@/lib/supabase/client'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function SignUp() {
  const router = useRouter()
  const supabase = createClient()
  const [userType, setUserType] = useState<'student' | 'teacher' | null>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [sessionCode, setSessionCode] = useState('')
  const [error, setError] = useState<string | null>(null)
  const [loading, setLoading] = useState(false)

  const handleSignUp = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setError(null)
    setLoading(true)

    // Validation
    if (!email || !password || !confirmPassword) {
      setError('Please fill in all fields')
      setLoading(false)
      return
    }

    if (password !== confirmPassword) {
      setError('Passwords do not match')
      setLoading(false)
      return
    }

    if (userType === 'student' && !sessionCode) {
      setError('Please enter a classroom session code')
      setLoading(false)
      return
    }

    try {
      // Sign up with metadata
      const { data, error: signUpError } = await supabase.auth.signUp({
        email,
        password,
        options: {
          emailRedirectTo:
            process.env.NEXT_PUBLIC_DEV_SUPABASE_REDIRECT_URL ||
            `${window.location.origin}/protected`,
          data: {
            role: userType,
            session_code: userType === 'student' ? sessionCode : undefined,
          },
        },
      })

      if (signUpError) {
        setError(signUpError.message)
      } else if (data.user) {
        // If student, enroll in classroom
        if (userType === 'student' && sessionCode) {
          try {
            const response = await fetch('/api/auth/enroll-classroom', {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify({
                userId: data.user.id,
                sessionCode,
              }),
            })

            if (!response.ok) {
              const result = await response.json()
              setError(result.error || 'Failed to join classroom')
              setLoading(false)
              return
            }
          } catch (err) {
            setError('Failed to join classroom')
            setLoading(false)
            return
          }
        }

        // Redirect to sign-up success page
        router.push('/auth/sign-up-success')
      }
    } catch (err) {
      setError('An unexpected error occurred')
    } finally {
      setLoading(false)
    }
  }

  if (!userType) {
    return (
      <div style={styles.page}>
        <div style={styles.wrapper}>
          <h2 style={styles.heading}>Create an Account</h2>
          <form style={styles.form}>
            <div style={styles.imgcontainer}>
              <div style={styles.avatarCircle}>
                <svg width="48" height="48" viewBox="0 0 24 24" fill="#ffffff">
                  <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
                </svg>
              </div>
            </div>
            <div style={styles.container}>
              <p style={{ textAlign: 'center', color: '#555', marginBottom: '1.5rem' }}>
                Are you a student or teacher?
              </p>
              <button
                type="button"
                onClick={() => setUserType('student')}
                style={{ ...styles.submitBtn, marginBottom: '12px' }}
              >
                I am a Student
              </button>
              <button
                type="button"
                onClick={() => setUserType('teacher')}
                style={{ ...styles.submitBtn, background: '#0b57d0' }}
              >
                I am a Teacher
              </button>
            </div>
            <div style={styles.footer}>
              <Link href="/" style={styles.cancelBtn}>Cancel</Link>
              <span style={styles.forgotSpan}>
                Already have an account?{' '}
                <Link href="/auth/login" style={styles.link}>Sign In</Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    )
  }

  return (
    <div style={styles.page}>
      <div style={styles.wrapper}>
        <h2 style={styles.heading}>
          Sign Up as {userType === 'student' ? 'Student' : 'Teacher'}
        </h2>
        <form onSubmit={handleSignUp} style={styles.form}>
          <div style={styles.imgcontainer}>
            <div style={{ ...styles.avatarCircle, background: userType === 'teacher' ? '#0b57d0' : '#04AA6D' }}>
              <svg width="48" height="48" viewBox="0 0 24 24" fill="#ffffff">
                <path d="M12 12c2.7 0 4.8-2.1 4.8-4.8S14.7 2.4 12 2.4 7.2 4.5 7.2 7.2 9.3 12 12 12zm0 2.4c-3.2 0-9.6 1.6-9.6 4.8v2.4h19.2v-2.4c0-3.2-6.4-4.8-9.6-4.8z"/>
              </svg>
            </div>
          </div>

          <div style={styles.container}>
            <button
              type="button"
              onClick={() => setUserType(null)}
              style={{ background: 'none', border: 'none', color: '#0b57d0', cursor: 'pointer', padding: '0 0 12px 0', fontSize: '0.875rem' }}
            >
              ← Change account type
            </button>

            <label htmlFor="email" style={styles.label}><b>Email</b></label>
            <input
              id="email"
              type="email"
              placeholder="Enter Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              style={styles.input}
              disabled={loading}
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
              disabled={loading}
            />

            <label htmlFor="confirmPassword" style={styles.label}><b>Confirm Password</b></label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="Confirm Password"
              required
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              style={styles.input}
              disabled={loading}
            />

            {userType === 'student' && (
              <>
                <label htmlFor="sessionCode" style={styles.label}><b>Classroom Session Code</b></label>
                <input
                  id="sessionCode"
                  type="text"
                  placeholder="e.g. ABC123"
                  value={sessionCode}
                  onChange={(e) => setSessionCode(e.target.value.toUpperCase())}
                  style={styles.input}
                  disabled={loading}
                />
                <p style={{ fontSize: '0.8rem', color: '#888', margin: '-8px 0 12px 0' }}>
                  Ask your teacher for the session code
                </p>
              </>
            )}

            {error && <p style={styles.error}>{error}</p>}

            <button
              type="submit"
              disabled={loading}
              style={{ ...styles.submitBtn, background: userType === 'teacher' ? '#0b57d0' : '#04AA6D' }}
            >
              {loading ? 'Creating account...' : 'Create Account'}
            </button>
          </div>

          <div style={styles.footer}>
            <Link href="/" style={styles.cancelBtn}>Cancel</Link>
            <span style={styles.forgotSpan}>
              Already have an account?{' '}
              <Link href="/auth/login" style={styles.link}>Sign In</Link>
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

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
      <div className="flex h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
        <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-lg">
          <h1 className="mb-2 text-center text-3xl font-bold text-slate-900">
            Create Account
          </h1>
          <p className="mb-8 text-center text-slate-600">
            Are you a student or teacher?
          </p>

          <div className="space-y-4">
            <button
              onClick={() => setUserType('student')}
              className="w-full rounded-lg border-2 border-blue-200 bg-blue-50 px-6 py-4 font-semibold text-blue-700 transition hover:border-blue-400 hover:bg-blue-100"
            >
              Student
            </button>
            <button
              onClick={() => setUserType('teacher')}
              className="w-full rounded-lg border-2 border-purple-200 bg-purple-50 px-6 py-4 font-semibold text-purple-700 transition hover:border-purple-400 hover:bg-purple-100"
            >
              Teacher
            </button>
          </div>

          <p className="mt-6 text-center text-sm text-slate-600">
            Already have an account?{' '}
            <Link href="/auth/login" className="font-semibold text-blue-600 hover:underline">
              Sign In
            </Link>
          </p>
        </div>
      </div>
    )
  }

  return (
    <div className="flex h-screen items-center justify-center bg-gradient-to-br from-slate-50 to-slate-100 px-4">
      <div className="w-full max-w-md rounded-lg border border-slate-200 bg-white p-8 shadow-lg">
        <button
          onClick={() => setUserType(null)}
          className="mb-6 text-sm text-blue-600 hover:underline"
        >
          ← Change user type
        </button>

        <h1 className="mb-2 text-2xl font-bold text-slate-900">
          Sign Up as {userType === 'student' ? 'Student' : 'Teacher'}
        </h1>
        <p className="mb-6 text-sm text-slate-600">
          {userType === 'student'
            ? 'Join a classroom and start learning'
            : 'Create your own classroom'}
        </p>

        <form onSubmit={handleSignUp} className="space-y-4">
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700">
              Email
            </label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="your@email.com"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="password" className="block text-sm font-medium text-slate-700">
              Password
            </label>
            <input
              id="password"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="••••••••"
              disabled={loading}
            />
          </div>

          <div>
            <label htmlFor="confirmPassword" className="block text-sm font-medium text-slate-700">
              Confirm Password
            </label>
            <input
              id="confirmPassword"
              type="password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
              placeholder="••••••••"
              disabled={loading}
            />
          </div>

          {userType === 'student' && (
            <div>
              <label htmlFor="sessionCode" className="block text-sm font-medium text-slate-700">
                Classroom Session Code
              </label>
              <input
                id="sessionCode"
                type="text"
                value={sessionCode}
                onChange={(e) => setSessionCode(e.target.value.toUpperCase())}
                className="mt-1 w-full rounded-lg border border-slate-300 bg-white px-4 py-2 text-slate-900 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
                placeholder="e.g. ABC123"
                disabled={loading}
              />
              <p className="mt-1 text-xs text-slate-500">
                Ask your teacher for the classroom session code
              </p>
            </div>
          )}

          {error && <div className="rounded-lg bg-red-50 p-4 text-sm text-red-700">{error}</div>}

          <button
            type="submit"
            disabled={loading}
            className="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white transition hover:bg-blue-700 disabled:opacity-50"
          >
            {loading ? 'Creating account...' : 'Sign Up'}
          </button>
        </form>

        <p className="mt-6 text-center text-sm text-slate-600">
          Already have an account?{' '}
          <Link href="/auth/login" className="font-semibold text-blue-600 hover:underline">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  )
}

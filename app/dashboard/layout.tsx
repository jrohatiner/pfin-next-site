'use client'

import { createClient } from '@/lib/supabase/client'
import { useRouter } from 'next/navigation'
import { useEffect, useState } from 'react'
import Link from 'next/link'

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode
}): React.ReactElement {
  const [user, setUser] = useState<any>(null)
  const [role, setRole] = useState<string | null>(null)
  const [loading, setLoading] = useState(true)
  const router = useRouter()
  const supabase = createClient()

  useEffect(() => {
    const checkAuth = async () => {
      const { data: sessionData } = await supabase.auth.getSession()
      if (!sessionData.session) {
        router.push('/auth/login')
        return
      }

      setUser(sessionData.session.user)

      const { data: profile } = await supabase
        .from('profiles')
        .select('role')
        .eq('id', sessionData.session.user.id)
        .single()

      if (profile) {
        setRole(profile.role)
      }

      setLoading(false)
    }

    checkAuth()
  }, [router, supabase])

  const handleLogout = async () => {
    await supabase.auth.signOut()
    router.push('/auth/login')
  }

  if (loading) {
    return (
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <p>Loading...</p>
      </div>
    )
  }

  if (!user) {
    return <div style={{ display: 'none' }}></div>
  }

  return (
    <div style={{ minHeight: '100vh', background: '#f8f9fa' }}>
      <nav style={{ background: '#ffffff', borderBottom: '1px solid #e0e0e0', padding: '1rem 2rem' }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
            <Link href="/" style={{ fontSize: '1.25rem', fontWeight: 'bold', color: '#1a1a2e', textDecoration: 'none' }}>
              IFi Labs
            </Link>
            <div style={{ display: 'flex', gap: '1.5rem' }}>
              <Link href="/dashboard" style={{ color: '#555', textDecoration: 'none' }}>Dashboard</Link>
              {role === 'student' && (
                <>
                  <Link href="/lessons" style={{ color: '#555', textDecoration: 'none' }}>Lessons</Link>
                  <Link href="/videos" style={{ color: '#555', textDecoration: 'none' }}>Videos</Link>
                  <Link href="/dashboard/student" style={{ color: '#555', textDecoration: 'none' }}>My Progress</Link>
                </>
              )}
              {role === 'teacher' && (
                <Link href="/dashboard/teacher" style={{ color: '#555', textDecoration: 'none' }}>Manage Classes</Link>
              )}
            </div>
          </div>
          <button
            onClick={handleLogout}
            style={{
              background: 'transparent',
              border: '1px solid #ccc',
              borderRadius: '6px',
              padding: '0.5rem 1rem',
              cursor: 'pointer',
              fontSize: '0.9rem',
              color: '#555',
            }}
          >
            Logout
          </button>
        </div>
      </nav>
      <main style={{ maxWidth: '1200px', margin: '0 auto', padding: '2rem' }}>
        {children}
      </main>
    </div>
  )
}

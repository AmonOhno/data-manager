'use client'

import { createContext, useContext, useEffect, useState } from 'react'
import { User, Session, AuthError, SupabaseClient } from '@supabase/supabase-js'

interface UserData {
  [key: string]: unknown
}

interface AuthContextType {
  user: User | null
  session: Session | null
  loading: boolean
  signIn: (email: string, password: string) => Promise<{ error: AuthError | null }>
  signUp: (email: string, password: string, userData: UserData) => Promise<{ error: AuthError | null }>
  signOut: () => Promise<{ error: AuthError | null }>
}

const AuthContext = createContext<AuthContextType | undefined>(undefined)

export function AuthProvider({ children }: { children: React.ReactNode }) {
  const [user, setUser] = useState<User | null>(null)
  const [session, setSession] = useState<Session | null>(null)
  const [loading, setLoading] = useState(true)
  const [supabase, setSupabase] = useState<SupabaseClient | null>(null)

  useEffect(() => {
    const initSupabase = async () => {
      // クライアントサイドでのみSupabaseクライアントを初期化
      if (typeof window !== 'undefined') {
        const { supabase: supabaseClient } = await import('@/lib/supabase')
        setSupabase(supabaseClient)

        // 初回セッション取得
        const { data: { session } } = await supabaseClient.auth.getSession()
        setSession(session)
        setUser(session?.user ?? null)
        setLoading(false)

        // 認証状態の変更を監視
        const { data: { subscription } } = supabaseClient.auth.onAuthStateChange(
          (_event: string, session: Session | null) => {
            setSession(session)
            setUser(session?.user ?? null)
            setLoading(false)
          }
        )

        return () => subscription.unsubscribe()
      } else {
        setLoading(false)
      }
    }

    initSupabase()
  }, [])

  const signIn = async (email: string, password: string) => {
    if (!supabase) return { error: new Error('Supabase not initialized') as AuthError }
    
    const { error } = await supabase.auth.signInWithPassword({
      email,
      password,
    })
    return { error }
  }

  const signUp = async (email: string, password: string, userData: UserData) => {
    if (!supabase) return { error: new Error('Supabase not initialized') as AuthError }
    
    const { error } = await supabase.auth.signUp({
      email,
      password,
      options: {
        data: userData,
      },
    })
    return { error }
  }

  const signOut = async () => {
    if (!supabase) return { error: new Error('Supabase not initialized') as AuthError }
    
    const { error } = await supabase.auth.signOut()
    return { error }
  }

  return (
    <AuthContext.Provider
      value={{
        user,
        session,
        loading,
        signIn,
        signUp,
        signOut,
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  const context = useContext(AuthContext)
  if (context === undefined) {
    throw new Error('useAuth must be used within an AuthProvider')
  }
  return context
}
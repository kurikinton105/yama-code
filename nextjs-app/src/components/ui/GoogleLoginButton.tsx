'use client'

import { useState } from 'react'
import { GoogleAuthProvider, signInWithPopup } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

export default function GoogleLoginButton() {
  const [error, setError] = useState<string | null>(null)
  const [isLoading, setIsLoading] = useState(false)

  const signInWithGoogle = async () => {
    if (!auth) {
      setError('認証機能が利用できません')
      return
    }

    setIsLoading(true)
    setError(null)
    
    try {
      const provider = new GoogleAuthProvider()
      const result = await signInWithPopup(auth, provider)
      
      console.log('Google Login Success:', result.user)
    } catch (error) {
      console.error('Google Login Error:', error)
      setError('ログインに失敗しました')
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <div className="space-y-2">
      <Button
        onClick={signInWithGoogle}
        disabled={isLoading}
        className="flex items-center gap-2"
      >
        <Avatar className="w-5 h-5">
          <AvatarImage src="/google-logo.png" alt="Google" />
        </Avatar>
        {isLoading ? 'ログイン中...' : 'Googleでログイン'}
      </Button>
      {error && (
        <p className="text-sm text-destructive">{error}</p>
      )}
    </div>
  )
}
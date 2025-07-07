'use client'

import { useState } from 'react'
import { signOut } from 'firebase/auth'
import { auth } from '@/lib/firebase'
import { Button } from '@/components/ui/button'

export default function GoogleLogoutButton() {
  const [isLoading, setIsLoading] = useState(false)

  const handleSignOut = async () => {
    if (!auth) {
      return
    }

    setIsLoading(true)
    
    try {
      await signOut(auth)
      console.log('Logout success')
    } catch (error) {
      console.error('Logout error:', error)
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <Button
      onClick={handleSignOut}
      disabled={isLoading}
      variant="outline"
    >
      {isLoading ? 'ログアウト中...' : 'ログアウト'}
    </Button>
  )
}
'use client'

import { useEffect, useState } from 'react'
import { useAuth } from '@/contexts/AuthContext'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import MainLayout from '@/components/layouts/MainLayout'
import GoogleLoginButton from '@/components/ui/GoogleLoginButton'
import GoogleLogoutButton from '@/components/ui/GoogleLogoutButton'
import LinkEditTable from '@/components/ui/LinkEditTable'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function EditPage() {
  const { user, isLogin } = useAuth()
  const [userRole, setUserRole] = useState('')
  const [errorMessage, setErrorMessage] = useState('')

  useEffect(() => {
    async function fetchUserRole() {
      if (isLogin && user && db) {
        try {
          const userDocRef = doc(db, 'users', user.uid)
          const userDoc = await getDoc(userDocRef)
          
          if (userDoc.exists()) {
            setUserRole(userDoc.data().role || 'error')
            setErrorMessage('')
          } else {
            console.error('User not found')
            setUserRole('error')
            setErrorMessage('ユーザーが見つかりませんでした')
          }
        } catch (error) {
          console.error('Error fetching user:', error)
          setUserRole('error')
          setErrorMessage('ユーザー情報の取得に失敗しました')
        }
      } else {
        setUserRole('')
      }
    }

    fetchUserRole()
  }, [isLogin, user])

  return (
    <MainLayout>
      <div className="container mx-auto px-4 py-8">
        <Card>
          <CardHeader>
            <CardTitle className="text-center">PageEdit</CardTitle>
          </CardHeader>
          <CardContent className="text-center space-y-4">
            {!isLogin && <GoogleLoginButton />}
            {isLogin && <GoogleLogoutButton />}
            
            <hr className="my-4" />
            
            {isLogin && (
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold">ステータスの確認</h3>
                  <p>ロール: {userRole}</p>
                  <p>権限: {user?.uid}</p>
                </div>
                
                {errorMessage && (
                  <p className="text-destructive">{errorMessage}</p>
                )}
                
                {userRole === 'admin' && (
                  <LinkEditTable />
                )}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </MainLayout>
  )
}
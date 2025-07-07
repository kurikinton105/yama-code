'use client'

import { useEffect, useState } from 'react'
import { doc, getDoc } from 'firebase/firestore'
import { db } from '@/lib/firebase'
import { Button } from '@/components/ui/button'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Loader2 } from 'lucide-react'
import Link from 'next/link'

interface LinkRedirectClientProps {
  id: string
}

export default function LinkRedirectClient({ id }: LinkRedirectClientProps) {
  const [linkURL, setLinkURL] = useState('')
  const [isError, setIsError] = useState(false)
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function fetchLink() {
      if (!db) {
        setIsError(true)
        setIsLoading(false)
        return
      }

      try {
        const docRef = doc(db, 'Link', id)
        const docSnap = await getDoc(docRef)
        
        if (docSnap.exists()) {
          const data = docSnap.data()
          setLinkURL(data.url)
          // 自動的にリダイレクト
          window.open(data.url, '_self')
        } else {
          setIsError(true)
        }
      } catch (error) {
        console.error('Error fetching link:', error)
        setIsError(true)
      } finally {
        setIsLoading(false)
      }
    }

    if (id) {
      fetchLink()
    }
  }, [id])

  const handleReload = () => {
    window.location.reload()
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center p-4">
      <Card className="w-full max-w-md">
        <CardHeader>
          <CardTitle className="text-center">
            アクセスありがとうございます。
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          {isLoading && !isError && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                リンクを取得中です。遷移しない場合は、リンクを確認しリロードしてください。
              </p>
              <div className="flex justify-center">
                <Loader2 className="h-8 w-8 animate-spin" />
              </div>
              <p className="text-sm">Now Loading...</p>
            </div>
          )}
          
          {isError && (
            <div className="space-y-4">
              <p className="text-sm text-destructive">
                エラーが発生しました。リンクを確認しリロードしてください。
              </p>
              <div className="flex gap-2 justify-center">
                <Button onClick={handleReload}>
                  リロード
                </Button>
                <Button asChild variant="outline">
                  <Link href="/">ホーム画面</Link>
                </Button>
              </div>
            </div>
          )}
          
          {linkURL && !isError && (
            <div className="space-y-4">
              <p className="text-sm text-muted-foreground">
                以下のリンクに遷移します。
              </p>
              <a 
                href={linkURL} 
                className="block text-sm text-blue-600 hover:underline break-all"
              >
                {linkURL}
              </a>
              <div className="flex gap-2 justify-center">
                <Button onClick={handleReload}>
                  リロード
                </Button>
                <Button asChild>
                  <a href={linkURL}>リンク先へ</a>
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  )
}
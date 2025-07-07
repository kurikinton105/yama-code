'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Button } from '@/components/ui/button'

export default function ArticlePage() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Articles</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Qiita</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              技術的な記事を投稿しています。
              プログラミングのTipsやチュートリアルを中心に書いています。
            </p>
            <Button asChild>
              <a 
                href="https://qiita.com/y_a_m_a" 
                target="_blank"
                rel="noopener noreferrer"
              >
                記事を見る
              </a>
            </Button>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Hatena Blog</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground mb-4">
              技術的な考察や日記を書いています。
              開発過程での気づきや学びを共有しています。
            </p>
            <Button asChild>
              <a 
                href="https://y-a-m-a-y-a.hatenablog.com/" 
                target="_blank"
                rel="noopener noreferrer"
              >
                ブログを見る
              </a>
            </Button>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
'use client'

import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'

export default function ActivityPage() {
  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Activity</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        <Card>
          <CardHeader>
            <CardTitle>Development</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              フロントエンド・バックエンドの開発を行っています。
              主にReact、Next.js、TypeScript、Node.jsを使用しています。
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Open Source</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              オープンソースプロジェクトに貢献したり、
              自分のプロジェクトを公開したりしています。
            </p>
          </CardContent>
        </Card>
        
        <Card>
          <CardHeader>
            <CardTitle>Writing</CardTitle>
          </CardHeader>
          <CardContent>
            <p className="text-sm text-muted-foreground">
              技術記事を書いて知識を共有しています。
              QiitaやHatena Blogで記事を投稿しています。
            </p>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
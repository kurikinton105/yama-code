'use client'

import { useState, useEffect } from 'react'
import { fetchArticles, ArticleItem } from '@/lib/api'
import { Card, CardContent } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'
import { ExternalLink } from 'lucide-react'

export default function ArticlePage() {
  const [articles, setArticles] = useState<ArticleItem[]>([])
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    async function loadArticles() {
      try {
        const response = await fetchArticles()
        setArticles(response.data)
      } catch (error) {
        console.error('Failed to load articles:', error)
      } finally {
        setIsLoading(false)
      }
    }

    loadArticles()
  }, [])

  if (isLoading) {
    return (
      <div className="py-8">
        <h2 className="text-3xl font-bold text-center mb-8">Articles</h2>
        <div className="flex justify-center">
          <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-primary"></div>
        </div>
      </div>
    )
  }

  return (
    <div className="py-8">
      <h2 className="text-3xl font-bold text-center mb-8">Articles</h2>
      
      <div className="text-center mb-8">
        <p className="text-muted-foreground">
          Qiita、はてなブログなどから記事の一覧をまとめています。
        </p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto px-4">
        {articles.map((article, index) => (
          <Card key={index} className="hover:shadow-lg transition-shadow duration-200">
            <CardContent className="p-4">
              <a
                href={article.link}
                target="_blank"
                rel="noopener noreferrer"
                className="block group"
              >
                <div className="flex items-start gap-3">
                  <Avatar className="w-8 h-8 flex-shrink-0">
                    <AvatarImage 
                      src={article.site} 
                      alt="Site icon"
                      width={32}
                      height={32}
                    />
                  </Avatar>
                  
                  <div className="flex-1 min-w-0">
                    <h3 className="font-medium text-sm leading-tight mb-2 group-hover:text-blue-600 transition-colors">
                      {article.name}
                      <ExternalLink className="inline-block ml-1 h-3 w-3 opacity-70" />
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      {article.date}
                    </p>
                  </div>
                </div>
              </a>
            </CardContent>
          </Card>
        ))}
      </div>

      {articles.length === 0 && !isLoading && (
        <div className="text-center text-muted-foreground">
          <p>記事が見つかりませんでした。</p>
        </div>
      )}
    </div>
  )
}
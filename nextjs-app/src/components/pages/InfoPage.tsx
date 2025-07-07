'use client'

import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card'
import { Avatar, AvatarImage } from '@/components/ui/avatar'

export default function InfoPage() {
  return (
    <div className="text-center py-8">
      <h1 className="text-4xl font-bold mb-8">
        Who is yama?
      </h1>
      
      <div className="mb-8">
        <Image
          src="https://pbs.twimg.com/profile_images/986113842739478528/2PlaIAsz_400x400.jpg"
          alt="yama icon"
          width={280}
          height={280}
          className="rounded-full mx-auto mb-4"
        />
        <h2 className="text-3xl font-bold">yama</h2>
      </div>
      
      <div className="flex justify-center">
        <Card className="w-full max-w-md">
          <CardHeader>
            <CardTitle className="text-xl">Engineer & Creator</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/github-logo.png" alt="GitHub" />
              </Avatar>
              <a 
                href="https://github.com/kurikinton105" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                kurikinton105
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/x-logo.png" alt="X (Twitter)" />
              </Avatar>
              <a 
                href="https://twitter.com/y_a_m_a_y_a" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                @y_a_m_a_y_a
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/qiita-logo.png" alt="Qiita" />
              </Avatar>
              <a 
                href="https://qiita.com/y_a_m_a" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                y_a_m_a
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarImage src="/hatena-logo.png" alt="Hatena Blog" />
              </Avatar>
              <a 
                href="https://y-a-m-a-y-a.hatenablog.com/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                yamaのメタノート
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8 rounded-none">
                <AvatarImage src="https://d1eu30co0ohy4w.cloudfront.net/assets/mark-f4be6df1e05965cac9f98e664a6c35f5ffdd0207385d07464a9214d6cdf76082.svg" alt="Speaker Deck" />
              </Avatar>
              <a 
                href="https://speakerdeck.com/kurikinton105" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                kurikinton105
              </a>
            </div>
            
            <div className="flex items-center gap-3">
              <Avatar className="w-8 h-8 rounded-none">
                <AvatarImage src="https://content.linkedin.com/content/dam/me/brand/en-us/brand-home/logos/In-Blue-Logo.png.original.png" alt="LinkedIn" />
              </Avatar>
              <a 
                href="https://www.linkedin.com/in/yamada-kenta5/" 
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-600 hover:underline"
              >
                yamada-kenta5
              </a>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
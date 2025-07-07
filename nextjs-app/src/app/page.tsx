import { Metadata } from 'next'
import MainLayoutServer from "@/components/layouts/MainLayoutServer"
import InfoPage from "@/components/pages/InfoPage"
import ActivityPage from "@/components/pages/ActivityPage"
import ArticlePage from "@/components/pages/ArticlePage"
import ScrollToTop from "@/components/ui/ScrollToTop"

export const metadata: Metadata = {
  title: 'yama-code | Engineer & Creator',
  description: 'yamaのポートフォリオサイト。フロントエンド・バックエンド開発、オープンソース活動、技術記事執筆を行っています。',
  keywords: ['yama', 'engineer', 'developer', 'portfolio', 'React', 'Next.js', 'TypeScript', 'Firebase'],
  authors: [{ name: 'yama' }],
  creator: 'yama',
  publisher: 'yama',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    url: 'https://yama-code.dev',
    siteName: 'yama-code',
    title: 'yama-code | Engineer & Creator',
    description: 'yamaのポートフォリオサイト。エンジニア・クリエイターとして活動しています。',
    images: [
      {
        url: 'https://pbs.twimg.com/profile_images/986113842739478528/2PlaIAsz_400x400.jpg',
        width: 400,
        height: 400,
        alt: 'yama profile image',
      },
    ],
  },
  twitter: {
    card: 'summary',
    site: '@y_a_m_a_y_a',
    creator: '@y_a_m_a_y_a',
    title: 'yama-code | Engineer & Creator',
    description: 'yamaのポートフォリオサイト。エンジニア・クリエイターとして活動しています。',
    images: ['https://pbs.twimg.com/profile_images/986113842739478528/2PlaIAsz_400x400.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

export default function Home() {
  return (
    <MainLayoutServer>
      <div className="container mx-auto px-4 py-8">
        <InfoPage />
        <hr className="my-8 border-gray-200" />
        <ActivityPage />
        <hr className="my-8 border-gray-200" />
        <ArticlePage />
        <ScrollToTop />
      </div>
    </MainLayoutServer>
  )
}

import { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { getLinkData } from '@/lib/firebase-admin'
import LinkRedirectClient from '@/components/LinkRedirectClient'

interface LinkPageProps {
  params: Promise<{
    id: string
  }>
}

export async function generateMetadata({ params }: LinkPageProps): Promise<Metadata> {
  const { id } = await params
  const linkData = await getLinkData(id)

  if (!linkData) {
    return {
      title: '短縮URL | yama-code',
      description: '短縮URLサービス - リンクが見つかりませんでした',
      robots: { index: false, follow: false },
    }
  }

  const title = linkData.title || '短縮URL | yama-code'
  const description = linkData.description || `${linkData.url} への短縮URLです`
  const ogpUrl = linkData.ogpUrl || 'https://pbs.twimg.com/profile_images/986113842739478528/2PlaIAsz_400x400.jpg'

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      url: `https://yama-code.dev/${id}`,
      siteName: 'yama-code',
      images: [
        {
          url: ogpUrl,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
      type: 'website',
    },
    twitter: {
      card: 'summary_large_image',
      title,
      description,
      images: [ogpUrl],
      site: '@y_a_m_a_y_a',
    },
    alternates: {
      canonical: linkData.url,
    },
    robots: {
      index: true,
      follow: true,
    },
  }
}

export default async function LinkPage({ params }: LinkPageProps) {
  const { id } = await params
  const linkData = await getLinkData(id)

  // データが存在しない場合は404ページにリダイレクト
  if (!linkData) {
    notFound()
  }

  return <LinkRedirectClient id={id} />
}
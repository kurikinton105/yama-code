// Server Component用のFirebase Admin設定
// 注意: firebase-adminは本番環境でのみ利用可能
// 開発環境やビルド時はダミーデータを返します

interface LinkData {
  url: string
  title: string
  description?: string
  ogpUrl?: string
}

export async function getLinkData(id: string): Promise<LinkData | null> {
  // 本番環境でfirebase-adminが利用可能な場合の実装
  if (process.env.NODE_ENV === 'production' && process.env.FIREBASE_SERVICE_ACCOUNT) {
    try {
      // 動的インポートでfirebase-adminを読み込み
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      const admin = await import('firebase-admin') as any
      
      if (admin.getApps().length === 0) {
        const serviceAccount = JSON.parse(process.env.FIREBASE_SERVICE_ACCOUNT)
        admin.initializeApp({
          credential: admin.cert(serviceAccount),
          projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
        })
      }
      
      const db = admin.getFirestore()
      const doc = db.collection('Link').doc(id)
      const snapshot = await doc.get()
      
      if (snapshot.exists) {
        return snapshot.data()
      }
      return null
    } catch (error) {
      console.error('Error fetching link data with Admin SDK:', error)
      return null
    }
  }

  // 開発環境やfirebase-adminが利用できない場合のフォールバック
  // 実際の実装では、公開APIやクライアントSDKを使用することも可能
  console.warn('Firebase Admin SDK not available, returning mock data for development')
  
  // デモ用のモックデータ
  if (id === 'demo') {
    return {
      url: 'https://github.com/kurikinton105',
      title: 'kurikinton105のGitHub',
      description: 'yamaのGitHubプロフィールページです',
      ogpUrl: 'https://pbs.twimg.com/profile_images/986113842739478528/2PlaIAsz_400x400.jpg'
    }
  }
  
  return null
}
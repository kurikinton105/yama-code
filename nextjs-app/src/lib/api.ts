import axios from 'axios'

// Activity API response type
export interface ActivityItem {
  name: string
  date_info: string
  side: string
  icon: string
  infomation: string
}

export interface ActivityResponse {
  data: ActivityItem[]
}

// Article API response type
export interface ArticleItem {
  name: string
  link: string
  date: string
  site: string
}

export interface ArticleResponse {
  data: ArticleItem[]
}

// Activity データを取得
export async function fetchActivities(): Promise<ActivityResponse> {
  try {
    const response = await axios.get<ActivityResponse>('https://api.sssapi.app/Dg3gg3OE7uDaEbBzq2DPb')
    return response.data
  } catch (error) {
    console.error('Failed to fetch activities:', error)
    // フォールバック データ
    return {
      data: [
        {
          name: 'API接続エラー',
          date_info: new Date().toLocaleDateString('ja-JP'),
          side: 'left',
          icon: 'error',
          infomation: 'アクティビティデータの取得に失敗しました。'
        }
      ]
    }
  }
}

// Article データを取得
export async function fetchArticles(): Promise<ArticleResponse> {
  try {
    const response = await axios.get<ArticleResponse>('https://api.sssapi.app/V-sFi3aRWS1Ykb1j3m2qO')
    return response.data
  } catch (error) {
    console.error('Failed to fetch articles:', error)
    // フォールバック データ
    return {
      data: [
        {
          name: 'API接続エラー',
          link: '#',
          date: new Date().toLocaleDateString('ja-JP'),
          site: '/qiita-logo.png'
        }
      ]
    }
  }
}
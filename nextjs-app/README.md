# yama-code Next.js

**yama-code**のNext.js + TypeScript + TailwindCSS + shadcn/uiによるリプレイス版です。

## 概要

このプロジェクトは、元のQuasar.jsベースのyama-codeアプリケーションを、モダンなNext.jsスタックで完全にリプレイスしたものです。

### 主要な機能

- 🏠 **メインページ**: yamaの紹介とソーシャルリンク
- 🔗 **短縮URLサービス**: Firebase Firestoreを使用したURL短縮機能
- 🔐 **Google認証**: Firebase Authenticationを使用したログイン機能
- ⚙️ **管理者機能**: 権限に基づくリンク編集・削除・追加機能
- 📱 **レスポンシブデザイン**: モバイルフレンドリーなUI
- 🌐 **日本語サポート**: 完全な日本語対応

## 技術スタック

- **Framework**: Next.js 15.3.5 (App Router)
- **Language**: TypeScript
- **Styling**: TailwindCSS + shadcn/ui
- **Authentication**: Firebase Auth (Google OAuth)
- **Database**: Firebase Firestore
- **Linting**: ESLint
- **Development**: Turbopack (dev server)

## セットアップ

### 1. 依存関係のインストール

```bash
npm install
```

### 2. 環境変数の設定

`.env.local`ファイルを作成し、Firebase設定を追加してください：

```env
NEXT_PUBLIC_FIREBASE_API_KEY=your-api-key
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=your-auth-domain
NEXT_PUBLIC_FIREBASE_PROJECT_ID=your-project-id
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=your-storage-bucket
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=your-messaging-sender-id
NEXT_PUBLIC_FIREBASE_APP_ID=your-app-id
```

### 3. 開発サーバーの起動

```bash
npm run dev
```

ブラウザで [http://localhost:3000](http://localhost:3000) を開いてください。

## スクリプト

- `npm run dev` - 開発サーバーの起動
- `npm run build` - プロダクションビルド
- `npm run start` - プロダクションサーバーの起動
- `npm run lint` - ESLintによるコードチェック

## プロジェクト構造

```
src/
├── app/                    # App Router ページ
│   ├── [id]/              # 動的ルート（短縮URL）
│   ├── l/[id]/            # 別の短縮URLパス
│   ├── edit/              # 管理者用編集ページ
│   ├── page.tsx           # メインページ
│   ├── layout.tsx         # ルートレイアウト
│   └── not-found.tsx      # 404ページ
├── components/            # Reactコンポーネント
│   ├── layouts/          # レイアウトコンポーネント
│   ├── pages/            # ページコンポーネント
│   └── ui/               # UIコンポーネント
├── contexts/             # React Context
│   └── AuthContext.tsx   # 認証コンテキスト
└── lib/                  # ユーティリティ
    ├── firebase.ts       # Firebase設定
    └── utils.ts          # shadcn/ui utils
```

## 機能の使用方法

### 短縮URL機能

1. Firebase Firestoreの`Link`コレクションにドキュメントを追加
2. `/{id}`または`/l/{id}`でアクセス
3. 自動的に元のURLにリダイレクト

### 管理者機能

1. `/edit`ページにアクセス
2. Googleアカウントでログイン
3. Firebase Firestoreの`users`コレクションで`role: "admin"`を設定
4. リンクの作成・編集・削除が可能

## Firebase設定

### 必要なFirestoreコレクション

1. **Link** - 短縮URLデータ
   ```
   {
     url: string,
     ogpUrl?: string,
     title?: string,
     description?: string
   }
   ```

2. **users** - ユーザー権限管理
   ```
   {
     role: "admin" | "user"
   }
   ```

### セキュリティルール例

```javascript
// Firestore Security Rules
rules_version = '2';
service cloud.firestore {
  match /databases/{database}/documents {
    match /Link/{document} {
      allow read: if true;
      allow write: if request.auth != null && get(/databases/$(database)/documents/users/$(request.auth.uid)).data.role == "admin";
    }
    match /users/{userId} {
      allow read, write: if request.auth != null && request.auth.uid == userId;
    }
  }
}
```

## 元のQuasarプロジェクトからの変更点

- **Framework**: Quasar.js → Next.js
- **Language**: JavaScript → TypeScript
- **Styling**: Quasar components → TailwindCSS + shadcn/ui
- **State Management**: Reactive store → React Context API
- **Routing**: Vue Router → Next.js App Router
- **Build System**: Quasar CLI → Next.js

## デプロイ

このプロジェクトはVercel、Netlify、その他のNext.js対応プラットフォームにデプロイできます。

### Vercel

```bash
npm install -g vercel
vercel
```

## ライセンス

Copyright yama 2020 - 2024.

## 貢献

プルリクエストやイシューは歓迎します。

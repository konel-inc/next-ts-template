# App Directory(Experimental)

AppDir は（現在：2023-02-07）実験的な機能です。（Beta)
Production 環境での利用は検討が必要です。

## 推奨

Next.js の Beta を一度目にしてからの利用を推奨します。

- Beta Docs[https://beta.nextjs.org/docs]

特に、

- Routing
- Rendering Fundamentals

の部分は熟知する必要があります。

## Basic

~/app の React 要素（JSX, TSX)は、

**すべて Server Side で動作**

1. Client 用のコンポネントには必ずファイル最上段に `'use client'`を追記する。<br>
   公式 Docs: https://beta.nextjs.org/docs/rendering/server-and-client-components#client-components

2. 支援する機能と RoadMap を確認<br>
   [https://beta.nextjs.org/docs/app-directory-roadmap]

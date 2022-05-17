# Konel:Next.js - typescript Template

コネル Next.js + Typescript の Template Project です。

- Template のアップデート以外のコミット厳禁。
- Template のアップデートが必要な場合は、Issue に登録 > PR で改善点の提出 > コードレビューごマージ

## Template の利用方法

- Terminal で

  YARNで
  ```bash
  yarn create next-app --example https://github.com/konel-inc/next-ts-template [APP_NAME]
  ```
  
  NPMで(NPX)
  ```bash
  npx create-next-app --example https://github.com/konel-inc/next-ts-template [APP_NAME]
  ```
- Git で Template-repository を利用 -> make new repository

## Branch分け方

/Styled-components : Styled-components のセッティング、ESLint、各種設定をしています。(main の分岐)

必要なものがあれば、Main から切って生成

## Getting Started

開発サーバーの起動方法

```bash
npm run dev
# or
yarn dev
```

## Commit Conventions

- [type]: [subject]
- Linked Issue - subject の最初に、 gh-[issue.No] 表記

### type

[test', 'fix', 'update', 'release]

### Commit workflow

add -> lintstaged -> commitlint

## Enviorments Config

.env.local.example をコピーし、名前を変更

- development : .env.local
- CI/CD :各設定にしたがう

[Next.js 公式 Docs](https://nextjs.org/docs/basic-features/environment-variables)

## 公式 Documentation

- [Next.js Documentation](https://nextjs.org/docs) - 公式 Docs
- [Learn Next.js](https://nextjs.org/learn) - 公式 Tutorial

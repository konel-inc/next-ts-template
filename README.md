# Konel:Next.js - typescript Template

コネル Next.js + Typescript の Template Project です。

- Template のアップデート以外のコミット厳禁。
- Template のアップデートが必要な場合は、Issue に登録 > PR で改善点の提出 > コードレビューごマージ


## 2023/6/8 Update
- Dependancy update (全ライブラリをLatestに）
- Svgr/webpackの設定を基本に埋め込みしました。（SVGをReact Componentとして扱う）import 文のPath最後に、
”?inline” Queryをつけることで、React Componentとして扱えます（Typescript), File Pathを取得したい場合は、
Queryなしの状態でImportしてください。
- @Svgr/webpackの設定は、Defaultにしています。追加Optionが必要な場合は、Docsを参考にして自由に組み込んでください。https://react-svgr.com/docs/webpack/
- 以外、動画ファイル（.mp4, mov, webm）、Glsl ファイル（.glsl, .freg, .vert）のLoader設定を追加しました。こちらは raw-loaderとglslify-loaderの併用です。

### Important: Styled-component settings is default.
最近の新規プロジェクトの傾向から、Styled-componentの設定を「基本」で埋め込みました。``next.config.js > compiler``
src/pages/_document.tsxに、ServerStyleSheet設定を追記＆update（getInitialProps参照）
以前「styled-components」Branchには存在していた、<ThemeProvider>の設定とDefaultThemeは意図的に入れていません。Projectの必要に応じて設定してください。(無駄な作業になる可能性が高いため）
Styled-componentsを使わない場合は、基本的にはnext.config.js > compiler > styledComponent : falseに、_document.tsxのServerStyleSheetの設定も削除。
  
## Template の利用方法

- Terminal で

  YARN で

  ```bash
  yarn create next-app --example https://github.com/konel-inc/next-ts-template [APP_NAME]
  ```

  NPM で(NPX)

  ```bash
  npx create-next-app --example https://github.com/konel-inc/next-ts-template [APP_NAME]
  ```

- Git で Template-repository を利用 -> make new repository

## Branch 分け方

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
- [Migration Next.js v13](https://beta.nextjs.org/docs/upgrade-guide) -Next.js 13 の Migration Docs（Beta Docs)

## Next.js v13 からの変更

**Beta 機能は除いて記述してください。**

### Next/image の Property 仕様が変更されました。

[https://beta.nextjs.org/docs/api-reference/components/image]

### Next/link の仕様が変更されました。

Link の中に<a>タグをいれると、このような Error が出力されます。

```Error: Invalid <Link> with <a> child. Please remove <a> or use <Link legacyBehavior>.
Learn more: https://nextjs.org/docs/messages/invalid-new-link-with-extra-anchor
```

<Link>コンポネントの中に<a>タグやPassHref属性を入れる必要はありません。
詳しい仕様についてはBetaDocsを参照してください。

[https://beta.nextjs.org/docs/api-reference/components/link]

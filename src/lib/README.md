# Konel:Next.js - typescript Template

## ~/src/lib ディレクトリ

- javascript(typescript)のモジュール化に利用。
- 再利用される Script は、特に理由がない限り./src/lib に保存。

## gtag, GoogleAnalitics の利用方法

Gtag の ID は、環境変数(.env)で管理されます。（.env.loacl.example[https://github.com/konel-inc/next-ts-template/blob/main/.env.local.example]を参照）

現状指定変数名は、

- NEXT_PUBLIC_GA_ID // GA のみ利用時
- NEXT_PUBLIC_GTM_ID // GTM を利用時

両方いれるのは推奨しない。
基本 GTM をいれ、GTM に GA を連動する方法を推奨

### \_app.tsx で全域設定する

./src/pages/\_app.tsx[https://github.com/konel-inc/next-ts-template/blob/main/src/pages/_app.tsx#L4]にセット

```bash
import { GoogleAnalytics, GoogleTagManager } from 'lib/gtag'
```

### GA Event を追加する。

1. Event を発火させる Component に　 gtag.tsx から "GtagEvent"を Import `import { GtagEvent } from lib/gtag`
2. ※UseEffect や Event Function で GtagEvent を実行（window.gtag が必要なため）完全に Client サイドで実行
3. Next.js 公式を参照する[https://github.com/vercel/next.js/tree/canary/examples/with-google-analytics]

## Path alias

'lib/'
Path の追加、変更などは、./tsconfig.json を参照

`bash import [module name] from 'lib/*'`

### Directory 構造と利用ガイドライン

```

```

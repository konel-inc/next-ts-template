# Konel:Next.js - typescript Template

## ~/src/assets ディレクトリ

### Path alias

Path の追加、変更などは、./tsconfig.json を参照

`bash import [Object name] from 'assets/img/test.jpg'`

例）assets/img のなかの test.jpg を「TestImg」という名前で使うとき

```
    import TestImg from 'assets/img/test.jpg'
    //...ReactDom(return)の中で
    <img src={TestImg.src} alt="altテキストです。">
```

### Directory 構造と利用ガイドライン

※og-image, font, ico など、静的 URL（Static Path）が必要なファイルは基本 Public に保存

以下のルールにそって下部 Dir を作成

- /img : 画像ファイルの基本 Path
- /inline : Svg を Inline で利用する場合、画像との混乱を避けたい場合。
- /data : 静的データ（テキストを一括管理したいとか、Config をデータ化したいとき）を json などで保存（Serialization）

そのほか、必要な区分は作成して対応

# パンクズリストを動的に出力するサンプル

## 前提

- ディレクトリ構造とパンクズは完全一致する
- 動的ルーティングのパスは `${slug}` で表現します。
  - ex）エンドユーザー ID を表示する場合
    - dynamic route が `[userId]` なら
    - `${userId}` と表現します

## パンクズのカスタマイズ

- 動的ルートについては `params` をそのまま表記するのがデフォルトになっています。
- ex）`/company/company-tomiz` なら `企業情報 > company-tomiz` と表記されます。
- 動的ルートのパンクズをカスタマイズする場合、 `src/utils/GenerateBreadCrumbs/generateDynamicLabel.ts` 内でカスタマイズします。
- switch 文で範囲を絞り、変換ロジックを実行します。
- ex）userId を任意の名前に変更する

```
case 'userId':
  const userName = getUserNameById(params[key]);
  if (userName) {
    customizedParams[key] = userName;
  }
  break;
```

## NG パターン

- NG パターンは想定しておりません。
- NG パターンの場合、正しくパンクズが表示できませんので、ご留意ください。

### dynamic route の slug と static path が同じ

- 同階層に dynamic route の slug と static path が並列に存在すると、パンクズが正しく生成されません。
- ディレクトリの持つ役割がわかりにくく、混乱を招く恐れがあるので、異なる名前をつけてください。
- ex）下記のような構成は NG 🙅‍♂️ です。

```
src/
  │
  ├── app/                                 # Appディレクトリ
  │   └── campaign/                        # キャンペーン一覧
  │       └── [campaignId]/                # キャンペーン詳細ページ？
  │           └── page.tsx
  │       └── campaignId/                  # キャンペーン詳細ページ？
  │           └── page.tsx
```

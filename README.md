# Mei Yoshikawa - Portfolio Website

吉川 芽生（Mei Yoshikawa）の個人ポートフォリオサイトのリポジトリです。
本サイトは [Astro](https://astro.build/) を使用して構築されており、GitHub Pages でホスティングされています。

（旧バージョンは Jekyll / Academic Pages テンプレートを使用していましたが、現在は Astro ベースの独自構成に完全移行しています。）

## 開発・ローカル実行方法 (Running Locally)

本サイトを手元で動かしてプレビュー・開発するための手順です。

### 1. 必要な環境
- Node.js (v18以降を推奨)
- npm

### 2. インストールと起動
```bash
# 依存パッケージのインストール
npm install

# ローカルサーバーの起動
npm run dev
```
起動後、ブラウザで `http://localhost:4321` にアクセスすると、ローカルプレビューが確認できます。ファイル（`.astro` や `.md`）を編集して保存すると、自動的にブラウザがリロードされます。

### 3. ビルドとデプロイ
```bash
# 本番用ビルドの生成（distフォルダに出力されます）
npm run build
```
GitHub Actionsを使用してデプロイを自動化しているため、`main` ブランチに変更をプッシュするだけで自動的に公開されます。

---

## サイトの編集マニュアル (Editing Manual)

サイトの内容を更新・編集するためのガイドです。

### プロフィールや全体設定の変更
- **`src/config.ts`**:
  サイトのタイトル、著者の基本情報（名前、メールアドレス、GitHub、LinkedInなどのSNSリンク）などの全体設定がまとまっています。ここを変更するだけでサイト全体の表記が一括で変わります。

### 論文（Publications）の追加・編集
論文データは `src/content/publications/` ディレクトリ内で Markdown ファイルとして管理されています。
新しく論文を追加する場合は、このフォルダ内に Markdown ファイル（例：`2026-06-17-new-paper.md`）を作成してください。

**フォーマット例**:
```markdown
---
title: "論文や発表のタイトル"
collection: "publications"
date: 2026-06-17
venue: "発表された学会やジャーナル名"
paperurl: "https://doi.org/..."
authors: "Mei Yoshikawa, Taro Yamada"
---
ここに概要（Abstract）や補足説明を書くことができます。
```

### 各ページの編集
サイトの個別のページ構成や文章は `src/pages/` フォルダの中にある `.astro` ファイルを直接編集します。

- **`src/pages/index.astro`**: トップページ。About Me（自己紹介文）、学歴、スキルなどの各セクションが記述されています。文章や経歴を追加する場合はここを編集してください。
- **`src/pages/cv.astro`**: 履歴書（CV）ページ。学歴や資格、スキルなどのリストが記載されています。
- **`src/pages/publications.astro`**: 論文一覧ページ。`src/content/publications/` 内のデータを自動で読み込んでギャラリー形式で表示します（見た目を変えたい場合のみ編集してください）。
- **`src/pages/projects.astro` / `year-archive.astro`**: 現在は準備中（Under Construction）のページです。必要に応じてコンテンツを構築してください。

### 画像の追加・差し替え
- **`public/images/`**:
  プロフィール画像や論文のサムネイル、ファビコンなどの静的画像はここに配置します。
  例：プロフィール画像を差し替える場合は、新しい画像をここに追加し、`src/config.ts` の `avatar` プロパティのファイル名を変更するか、`index.astro` の画像パスを書き換えてください。

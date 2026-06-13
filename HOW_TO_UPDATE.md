# 学会発表・論文の追加マニュアル

サイトの運営において頻繁に更新することになる「学会（Conferences）」および「論文（Publications）」の追加手順をまとめました。
このドキュメントを参考に、コピペして情報を書き換えるだけで簡単に更新が可能です。

---

## 1. 論文（Publications）を追加する方法

論文は、`_publications` フォルダ内に新しいMarkdownファイル（例：`2026-04-01-new-paper.md`）を作成することで自動的に一覧ページや個別ページに追加されます。

### 作成するファイルのルール
- **ファイル名の形式**: `YYYY-MM-DD-好きなファイル名.md`（例：`2026-04-01-nature-paper.md`）
- **保存場所**: `_publications/` フォルダ内

### ファイルの中身（テンプレート）
以下の内容をコピーして、新しいファイルに貼り付けて書き換えてください。

```yaml
---
title: "ここに論文のタイトルを入力（例：A novel approach to...）"
collection: publications
permalink: /publication/2026-04-01-new-paper
excerpt: "ここに論文の簡単な要約（英語1〜2文程度）を入力します。一覧ページに表示されます。"
date: 2026-04-01
venue: "ここに雑誌名や学会名を入力（例：Nature Communications）"
authors: "Mei Yoshikawa, Co-author 1, Co-author 2"
paperurl: "https://doi.org/10.xxxx/xxxx"
# 必要に応じて以下のリンクも追加できます（不要な場合は行ごと削除）
slidesurl: "https://example.com/slides.pdf"
bibtexurl: "https://example.com/bibtex.txt"
header:
  teaser: "F1.medium.gif" # サムネイル画像（imagesフォルダ内に配置）
---

ここに論文の詳細な説明や背景などをMarkdown形式で自由に書くことができます。
このテキストは個別ページ（/publication/2026-04-01-new-paper）を開いたときに表示されます。
```

---

## 2. 学会発表（Conferences）を追加する方法

学会発表のリストは、トップページ（`_pages/about.md`）と CVページ（`_pages/cv.md`）に直接HTMLとして記載されています。
追加する際は、**両方のファイル**の該当箇所に以下のコードをコピペして追記してください。

### 追記する場所
1. `_pages/about.md` を開く
2. `<!-- Conferences -->` または `<h2 class="section-title">学会</h2>` の下にある `<ul class="timeline-list">` を見つける
3. 一番上（または適切な日付の位置）に以下のテンプレートを挿入する
4. `_pages/cv.md` でも全く同じ作業を行う

### 追加するコード（テンプレート）

```html
      <li>
        <div class="timeline-date">YYYY/MM</div>
        <div class="timeline-content">
          <strong><a href="発表のリンクがあればここに入力" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">ここに発表のタイトルを入力</a></strong><br>
          <span class="text-light"><span class="badge badge-oral">Oral</span> ここに学会名を入力 (開催地)</span>
        </div>
      </li>
```

---

## 3. 活動・受賞（Activities & Awards）を追加する方法

活動履歴も学会発表と同様に、`_pages/about.md` と `_pages/cv.md` に直接記載されています。
`<ul class="timeline-list">` 内に以下のコードを追加してください。

### 追加するコード（テンプレート）

```html
      <li>
        <div class="timeline-date">YYYY/MM</div>
        <div class="timeline-content">
          <strong>ここに活動の内容や受賞名を入力</strong><br>
          <span style="color: var(--global-text-color-light);">必要であればここに補足（主催者など）</span>
        </div>
      </li>
```

---

## ローカルでの確認方法

ご自身のPCでサイトの変更をプレビューする場合は、ターミナルで以下のコマンドを実行します。

```bash
bundle exec jekyll serve
```
実行後、ブラウザで `http://127.0.0.1:4000/` にアクセスすることで、ローカルで表示を確認できます。問題がなければ `git push` を行って本番環境に反映してください。

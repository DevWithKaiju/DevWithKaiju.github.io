# My Portfolio Website

これは、学会発表や論文、これまでの活動履歴をまとめたポートフォリオサイトのリポジトリです。
AcademicPagesのテンプレートをベースに、モダンで親しみやすいデザインへとフルカスタマイズされています。

---

## サイトの更新方法（アップデートガイド）

サイトの運営において頻繁に更新することになる「学会（Conferences）」および「論文（Publications）」の追加手順をまとめました。
以下のルールに従ってファイルを編集・追加するだけで、サイトに自動反映されます。

### 1. 論文（Publications）を追加する方法

論文は、`_publications` フォルダ内に新しいMarkdownファイルを作成することで自動的に「Publicationsページ」に追加されます。

- **ファイル名の形式**: `YYYY-MM-DD-好きなファイル名.md`（例：`2026-04-01-nature-paper.md`）
- **保存場所**: `_publications/` フォルダ内

**【テンプレート】** 以下の内容をコピーして新しいファイルに貼り付け、内容を書き換えてください。

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
このテキストは個別ページを開いたときに表示されます。
```


### 2. 学会発表（Conferences）を追加する方法

学会発表のリストは、トップページ（`_pages/about.md`）と CVページ（`_pages/cv.md`）に直接HTMLとして記載されています。
追加する際は、**両方のファイル**の該当箇所に以下のコードをコピペして追記してください。

**【追記する場所】**
`<!-- Conferences -->` または `<h2 class="section-title">学会</h2>` の下にある `<ul class="timeline-list">` を探し、一番上（または適切な日付の位置）に以下のコードを挿入します。

**【テンプレート】**
```html
      <li>
        <div class="timeline-date">YYYY/MM</div>
        <div class="timeline-content">
          <strong><a href="発表のリンクがあればここに入力" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit;">ここに発表のタイトルを入力</a></strong><br>
          <span style="color: var(--global-text-color-light);">発表形式（Oral / Posterなど） / ここに学会名を入力 (開催地)</span>
        </div>
      </li>
```


### 3. 活動・受賞（Activities & Awards）を追加する方法

活動履歴や受賞歴も学会発表と同様に、`_pages/about.md` と `_pages/cv.md` の `<ul class="timeline-list">` 内に直接追記します。

**【テンプレート】**
```html
      <li>
        <div class="timeline-date">YYYY/MM</div>
        <div class="timeline-content">活動の内容や受賞名を入力<br>
        <span style="color: var(--global-text-color-light);">必要であればここに補足（主催者など）</span></div>
      </li>
```

---

## ローカルでの確認方法

ご自身のPCでサイトの変更をプレビューする場合は、ターミナルで以下のコマンドを実行します。

```bash
bundle exec jekyll serve
```
実行後、ブラウザで `http://127.0.0.1:4000/` にアクセスすることで、ローカルでサイトの表示を確認できます。問題がなければ `git push` を行って本番環境に反映してください。

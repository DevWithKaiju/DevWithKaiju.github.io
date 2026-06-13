---
layout: single
title: "履歴書 (Curriculum Vitae)"
permalink: /cv/
author_profile: true
classes: custom-cv-page wide
---

<div class="background-blob"></div>

<section class="modern-section" style="margin-top: 2rem;">
  <h2 class="section-title"><i class="fas fa-graduation-cap"></i> 学歴 (Education)</h2>
  <div class="modern-card">
    <ul class="timeline-list">
      <li>
        <div class="timeline-date">2025/4-</div>
        <div class="timeline-content"><strong>東京大学 大学院薬学系研究科 修士課程</strong> <br><span style="font-size: 0.95rem; color: var(--global-text-color-light);">分子薬物動態学教室</span></div>
      </li>
      <li>
        <div class="timeline-date">2025/3</div>
        <div class="timeline-content"><strong>東京大学 薬学部薬科学科</strong> 卒業</div>
      </li>
      <li>
        <div class="timeline-date">2021/4</div>
        <div class="timeline-content"><strong>東京大学 理科二類</strong> 入学</div>
      </li>
      <li>
        <div class="timeline-date">2020/3</div>
        <div class="timeline-content"><strong>土浦日本大学高等学校</strong> 卒業</div>
      </li>
    </ul>
  </div>
</section>

<section class="modern-section">
  <h2 class="section-title"><i class="fas fa-laptop-code"></i> スキル (Skills)</h2>
  <div class="modern-card tags-card">
    <span class="modern-tag">Python (データ解析・機械学習・NLP)</span>
    <a href="https://www.mizuno-group.com/" target="_blank" rel="noopener noreferrer" style="text-decoration: none;"><span class="modern-tag">Web 開発 (研究室ウェブサイト制作)</span></a>
  </div>
</section>

<section class="modern-section">
  <h2 class="section-title"><i class="fas fa-certificate"></i> 資格 (Certifications)</h2>
  <div class="modern-card">
    <dl class="cert-grid">
      <dt class="cert-grid-title">IT & データサイエンス</dt>
      <dd class="cert-grid-desc">データベーススペシャリスト試験 合格, 応用情報技術者試験 合格, 統計検定 2級</dd>
      
      <dt class="cert-grid-title">語学</dt>
      <dd class="cert-grid-desc">実用英語技能検定 準1級</dd>
      
      <dt class="cert-grid-title">デザイン</dt>
      <dd class="cert-grid-desc">色彩検定 2級 & UC (Universal Color) 級</dd>
      
      <dt class="cert-grid-title">その他</dt>
      <dd class="cert-grid-desc">剣道 2段</dd>
    </dl>
  </div>
</section>

<section class="modern-section">
  <h2 class="section-title"><i class="fas fa-book-open"></i> 論文 (Publications)</h2>
  <div class="modern-card">
    <ul class="clean-list" style="display: flex; flex-direction: column; gap: 0.8rem;">
      {% for post in site.publications reversed %}
      <li style="align-items: flex-start; gap: 0.5rem; border-bottom: 1px dashed var(--global-border-color); padding-bottom: 0.8rem;">
        <span style="color: var(--primary-color); font-weight: 500; min-width: 50px;">{{ post.date | date: "%Y" }}</span>
        <span style="font-size: 0.95rem; line-height: 1.5; color: var(--global-text-color);">
          {{ post.citation | strip_html }}
        </span>
      </li>
      {% endfor %}
    </ul>
  </div>
</section>
---
layout: splash
permalink: /
title: ""
---

<div class="background-blob"></div>

<div class="hero-container">
  <div class="hero-content">
    <div class="hero-image">
      <img src="{{ site.author.avatar | prepend: '/images/' | relative_url }}" alt="Mei Yoshikawa" class="hero-avatar">
    </div>
    <div class="hero-text">
      <h1 class="hero-name">吉川 芽生 <span class="hero-name-en">/ Mei Yoshikawa</span></h1>
      <p class="hero-bio">Master's student at the Graduate School of Pharmaceutical Sciences, University of Tokyo. Exploring the intersection of pharmaceutical sciences, NLP, and Language Models to accelerate data-driven drug discovery.</p>
      <div class="hero-socials">
        <a href="mailto:{{ site.author.email }}" class="hero-social-link"><i class="fas fa-envelope"></i></a>
        <a href="https://github.com/{{ site.author.github }}" class="hero-social-link"><i class="fab fa-github"></i></a>
        <a href="https://www.linkedin.com/in/{{ site.author.linkedin }}" class="hero-social-link"><i class="fab fa-linkedin-in"></i></a>
      </div>
    </div>
  </div>
</div>

<div class="modern-content-wrapper">

  <section class="modern-section">
    <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Education</h2>
    <div class="modern-card">
      <ul class="timeline-list">
        <li>
          <div class="timeline-date">2025/4-</div>
          <div class="timeline-content"><strong>東京大学 大学院薬学系研究科 修士課程</strong> <br><span style="color: var(--global-text-color-light);">分子薬物動態学教室</span></div>
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
    <h2 class="section-title"><i class="fas fa-laptop-code"></i> Skills</h2>
    <div class="modern-card tags-card">
      <span class="modern-tag">Python (データ解析・機械学習・NLP)</span>
      <a href="https://www.mizuno-group.com/" target="_blank" rel="noopener noreferrer" style="text-decoration: none;"><span class="modern-tag">Web 開発 (研究室ウェブサイト制作)</span></a>
    </div>
  </section>

  <section class="modern-section">
    <h2 class="section-title"><i class="fas fa-microscope"></i> Interests</h2>
    <div class="modern-card tags-card">
      <span class="modern-tag">Biomedical NLP</span> 
      <span class="modern-tag">Language Models</span> 
      <span class="modern-tag">Bioinformatics</span>
      <span class="modern-tag">Drug Discovery</span>
    </div>
  </section>

  <section class="modern-section">
    <h2 class="section-title"><i class="fas fa-book-open"></i> Publications</h2>
    <div class="modern-card">
      <ul class="clean-list" style="display: flex; flex-direction: column; gap: 0.8rem;">
        {% for post in site.publications reversed %}
        <li style="align-items: flex-start; gap: 0.5rem; border-bottom: 1px dashed var(--global-border-color); padding-bottom: 0.8rem;">
        <span style="color: var(--primary-color); font-weight: 500; min-width: 50px; margin-top: 2px;">{{ post.date | date: "%Y" }}</span>
        <span style="line-height: 1.5;">
          <strong><a href="{{ post.paperurl | default: '#' }}" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; transition: color 0.3s ease;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='inherit'">{{ post.title }}</a></strong><br>
          {% if post.authors %}<span style="color: var(--global-text-color-light);">{{ post.authors }}</span><br>{% endif %}
          {% if post.venue %}<span style="color: var(--primary-color); font-weight: 500;"><em>{{ post.venue }}</em></span>{% endif %}
        </span>
      </li>
        {% endfor %}
      </ul>
      <div style="text-align: right; margin-top: 1rem;">
        <a href="{{ '/publications/' | relative_url }}" class="gallery-link"><i class="fas fa-images"></i> ギャラリー表示はこちら &rarr;</a>
      </div>
    </div>
  </section>

  <section class="modern-section">
    <h2 class="section-title"><i class="fas fa-users"></i> Conferences</h2>
    <div class="modern-card">
      <ul class="timeline-list">
        <li>
          <div class="timeline-date">2025/12</div>
          <div class="timeline-content">
            <strong><a href="https://www.senkyo.co.jp/iyakudokuken/8th_sapporo/index.html" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; transition: color 0.3s ease;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='inherit'">言語モデルを用いた生物医学論文からの細胞間相互作用抽出の検討</a></strong><br>
            <span style="color: var(--global-text-color-light);">Oral / 第8回医薬品毒性機序研究会 (北海道・ハイブリッド)</span>
          </div>
        </li>
        <li>
          <div class="timeline-date">2025/9</div>
          <div class="timeline-content">
            <strong><a href="https://ycps.jp/19/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; transition: color 0.3s ease;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='inherit'">言語AIを用いた細胞-細胞関係性情報構造化の検討</a></strong><br>
            <span style="color: var(--global-text-color-light);">Poster / 第19回次世代を担う若手のための医療薬科学シンポジウム (京都)</span>
          </div>
        </li>
        <li>
          <div class="timeline-date">2025/9</div>
          <div class="timeline-content">
            <strong><a href="https://www.jsbi.org/iibmp2025/" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; transition: color 0.3s ease;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='inherit'">細胞間関係性の俯瞰に向けた言語モデルによる細胞間関係性抽出の検討</a></strong><br>
            <span style="color: var(--global-text-color-light);">Poster / 2025年日本バイオインフォマティクス学会年会 (名古屋)</span>
          </div>
        </li>
        <li>
          <div class="timeline-date">2025/3</div>
          <div class="timeline-content">
            <strong><a href="https://pub.confit.atlas.jp/ja/event/pharm145" target="_blank" rel="noopener noreferrer" style="text-decoration: none; color: inherit; transition: color 0.3s ease;" onmouseover="this.style.color='var(--accent-color)'" onmouseout="this.style.color='inherit'">細胞間関係性の俯瞰に向けた言語モデルによる免疫細胞関係性抽出の検討</a></strong><br>
            <span style="color: var(--global-text-color-light);">Poster / 日本薬学会第145年会 (福岡)</span>
          </div>
        </li>
      </ul>
    </div>
  </section>

  <section class="modern-section">
    <h2 class="section-title"><i class="fas fa-hands-helping"></i> Activities</h2>
    <div class="modern-card">
      <ul class="clean-list" style="display: flex; flex-direction: column; gap: 0.8rem;">
        <li style="display: flex; gap: 0.5rem; align-items: flex-start;">
          <span style="min-width: 80px; color: var(--primary-color); font-weight: 500;">2026/10</span>
          <span style="line-height: 1.5;">第20回次世代を担う若手のための医療薬科学シンポジウム<br>若手交流会 オーガナイザー（予定）</span>
        </li>
        <li style="display: flex; gap: 0.5rem; align-items: flex-start;">
          <span style="min-width: 80px; color: var(--primary-color); font-weight: 500;">2025/3</span>
          <span style="line-height: 1.5;">東京大学 薬学部 薬科学科 卒業生代表</span>
        </li>
        <li style="display: flex; gap: 0.5rem; align-items: flex-start;">
          <span style="min-width: 80px; color: var(--primary-color); font-weight: 500;">2025/3</span>
          <span style="line-height: 1.5;">東京大学 薬学部長賞</span>
        </li>
      </ul>
    </div>
  </section>

  <section class="modern-section">
    <h2 class="section-title"><i class="fas fa-award"></i> Scholarships & Grants</h2>
    <div class="modern-card">
      <ul class="clean-list">
        <li><span style="display:inline-block; width: 80px; color: var(--primary-color); font-weight: 500;">2022-</span> 東京大学さつき会奨学金（島村昭次郎記念口）</li>
      </ul>
    </div>
  </section>

  <section class="modern-section">
    <h2 class="section-title"><i class="fas fa-certificate"></i> Key Certifications</h2>
    <div class="modern-card">
      <ul class="clean-list">
        <li><i class="fas fa-check-circle"></i> データベーススペシャリスト試験 合格</li>
        <li><i class="fas fa-check-circle"></i> 応用情報技術者試験 合格</li>
        <li><i class="fas fa-check-circle"></i> 統計検定 2級</li>
      </ul>
    </div>
  </section>

</div>

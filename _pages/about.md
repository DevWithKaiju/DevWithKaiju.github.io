---
layout: splash
permalink: /
title: ""
---

<div class="hero-container">
  <div class="hero-profile">
    <img src="{{ site.author.avatar | prepend: '/images/' | relative_url }}" alt="Mei Yoshikawa" class="hero-avatar">
    <h1 class="hero-name">吉川 芽生 <span class="hero-name-en">/ Mei Yoshikawa</span></h1>
    <p class="hero-bio">Master's student at the Graduate School of Pharmaceutical Sciences, University of Tokyo. Exploring the intersection of pharmaceutical sciences, NLP, and Language Models to accelerate data-driven drug discovery.</p>
    
    <div class="hero-socials">
      <a href="mailto:{{ site.author.email }}" class="hero-social-link"><i class="fas fa-envelope"></i></a>
      <a href="https://github.com/{{ site.author.github }}" class="hero-social-link"><i class="fab fa-github"></i></a>
    </div>
  </div>
</div>

<div class="modern-content-wrapper">

  <section class="modern-section">
    <h2 class="section-title"><i class="fas fa-graduation-cap"></i> Education</h2>
    <div class="modern-card">
      <ul class="timeline-list">
        <li>
          <div class="timeline-date">2025/3</div>
          <div class="timeline-content"><strong>東京大学</strong> 薬学部薬科学科 卒業</div>
        </li>
        <li>
          <div class="timeline-date">2020/3</div>
          <div class="timeline-content"><strong>土浦日本大学高等学校</strong> 卒業</div>
        </li>
      </ul>
    </div>
  </section>

  <section class="modern-section">
    <h2 class="section-title"><i class="fas fa-microscope"></i> Research Interests</h2>
    <div class="modern-card tags-card">
      <span class="modern-tag">Biomedical NLP</span> 
      <span class="modern-tag">Language Models</span> 
      <span class="modern-tag">Bioinformatics</span>
      <span class="modern-tag">Drug Discovery</span>
    </div>
  </section>

  <section class="modern-section">
    <h2 class="section-title"><i class="fas fa-book-open"></i> Publications & Preprints</h2>
    <div class="modern-card item-card">
      <div class="item-meta">_bioRxiv_, 2025</div>
      <h3 class="item-title">Designing Cell–Cell Relation Extraction Models: A Systematic Evaluation of Entity Representation and Pre-training Strategies</h3>
      <p class="item-authors"><strong>Mei Yoshikawa</strong>, Tadahaya Mizuno†, Yohei Ohto, Hiromi Fujimoto, Hiroyuki Kusuhara</p>
    </div>
  </section>

  <section class="modern-section">
    <h2 class="section-title"><i class="fas fa-users"></i> Conferences</h2>
    <div class="modern-grid">
      <div class="modern-card item-card">
        <div class="item-meta">Poster / 日本薬学会 (福岡) / 3/2025</div>
        <h3 class="item-title">細胞間関係性の俯瞰に向けた言語モデルによる免疫細胞関係性抽出の検討</h3>
      </div>
      <div class="modern-card item-card">
        <div class="item-meta">Poster / バイオインフォマティクス学会 (名古屋) / 9/2025</div>
        <h3 class="item-title">細胞間関係性の俯瞰に向けた言語モデルによる細胞間関係性抽出の検討</h3>
      </div>
      <div class="modern-card item-card">
        <div class="item-meta">Poster / 医療薬科学シンポジウム (京都) / 9/2025</div>
        <h3 class="item-title">言語AIを用いた細胞-細胞関係性情報構造化の検討</h3>
      </div>
      <div class="modern-card item-card">
        <div class="item-meta">Oral / 医薬品毒性機序研究会 (北海道) / 12/2025</div>
        <h3 class="item-title">言語モデルを用いた生物医学論文からの細胞間相互作用抽出の検討</h3>
      </div>
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
  <section class="modern-section" markdown="0">
    <h2 class="section-title"><i class="fas fa-coffee"></i> Take a Break</h2>
    <div class="modern-card omikuji-card" onclick="drawOmikuji()">
      <div class="omikuji-content">
        <i class="fas fa-dice" style="font-size: 2.5rem; color: var(--global-link-color); margin-bottom: 1rem;"></i>
        <h3 style="margin-top:0;">おみくじを引く</h3>
        <p style="margin-bottom:0; color: var(--global-text-color-light);">クリックして今日の運勢を占ってみましょう！</p>
      </div>
    </div>
  </section>

</div>

<!-- Omikuji Modal -->
<div id="omikuji-modal" class="omikuji-modal" onclick="closeOmikuji()">
  <div class="omikuji-modal-content" onclick="event.stopPropagation()">
    <button class="omikuji-close" onclick="closeOmikuji()"><i class="fas fa-times"></i></button>
    <div id="omikuji-result-icon"></div>
    <h2 id="omikuji-result-text"></h2>
    <p id="omikuji-result-desc"></p>
  </div>
</div>

<script>
  const fortunes = [
    { text: "大吉", icon: "🌸", desc: "最高の運勢！素晴らしい成果が出そうです。" },
    { text: "吉", icon: "✨", desc: "良い一日になりそうです。自信を持って進みましょう。" },
    { text: "中吉", icon: "🍀", desc: "コツコツ努力すると吉。着実に進展します。" },
    { text: "小吉", icon: "🌱", desc: "小さな幸せが訪れるかも。リラックスして過ごしましょう。" },
    { text: "末吉", icon: "⛅", desc: "焦らず待てば運が開けます。地道な作業に向いています。" }
  ];

  function drawOmikuji() {
    const modal = document.getElementById('omikuji-modal');
    const resultText = document.getElementById('omikuji-result-text');
    const resultDesc = document.getElementById('omikuji-result-desc');
    const resultIcon = document.getElementById('omikuji-result-icon');
    
    // Add simple shuffle animation effect
    resultIcon.innerText = "🎲";
    resultText.innerText = "シャッフル中...";
    resultDesc.innerText = "";
    modal.classList.add('show');
    
    setTimeout(() => {
      const fortune = fortunes[Math.floor(Math.random() * fortunes.length)];
      resultIcon.innerText = fortune.icon;
      resultText.innerText = fortune.text;
      resultDesc.innerText = fortune.desc;
    }, 600);
  }

  function closeOmikuji() {
    const modal = document.getElementById('omikuji-modal');
    modal.classList.remove('show');
  }
</script>
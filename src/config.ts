// Site configuration — replaces Jekyll's _config.yml
export const siteConfig = {
  locale: 'ja-JP',
  title: '吉川 芽生 / Mei Yoshikawa',
  description: "Mei Yoshikawa's academic portfolio",
  url: 'https://devwithkaiju.github.io',
  repository: 'DevWithKaiju/DevWithKaiju.github.io',
};

export const author = {
  avatar: 'profile.jpg',
  name: 'Mei Yoshikawa',
  bio: "Master's student @ The University of Tokyo, Pharmaceutical Sciences",
  email: 'lion.giraffe.may.2525@gmail.com',
  github: 'DevWithKaiju',
  linkedin: 'mei-yoshikawa',
};

export const navigation = [
  { title: 'About me', url: '/' },
  { title: 'Publications', url: '/publications/' },
  { title: 'Projects', url: '/projects/' },
  { title: 'Blog Posts', url: '/year-archive/' },
  { title: 'CV', url: '/cv/' },
];

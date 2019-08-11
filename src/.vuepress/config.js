module.exports = {
  dest: 'docs/',
  base: '/site/',
  title: 'rb_de0',
  description: 'rb_de0 profile',
  locales: {
    '/': {
      lang: 'ja'
    }
  },
  head: [
    ['link', { rel: 'icon', href: '/icon.png' }],
    ['meta', { name: 'og:url', content: 'https://rb-de0.github.io/site' }],
    ['meta', { name: 'og:type', content: 'website' }],
    ['meta', { name: 'og:title', content: 'rb_de0' }],
    ['meta', { name: 'og:description', content: 'rb_de0 profile' }],
    ['meta', { name: 'og:image', content: '/site/icon.png' }]
  ],
  themeConfig: {
    nav: [
      { text: 'Profile', link: '/profile/' },
      { text: 'Contact', link: '/contact/' }
    ],
    sidebar: 'auto',
    search: false
  }
}
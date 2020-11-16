module.exports = {
  title: 'test111',
  description: 'Just playing around',
  themeConfig: {
    nav: [
      { text: '首页', link: '/' },
      { text: 'Guide', link: '/guide/' },
      { text: 'External', link: 'https://google.com' },
    ],
    sidebar: [
      '/',
      '/test/a',
      '/test/b',
    ],
    displayAllHeaders: false // 默认值：false
  }
}
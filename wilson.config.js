/**
 * @type { import('wilson').SiteConfig }
 */
module.exports = {
  siteData: {
    siteName: 'Codepunkt',
    siteUrl: 'https://codepunkt.de/',
    titleTemplate: '%s | Codepunkt',
    description: 'Musings about web development and cloud technology.',
    author: 'Christoph Werner',
    lang: 'en',
  },
  pageLayouts: [
    { pattern: 'writing/**/*', layout: 'blog' },
    { pattern: '**', layout: 'default' },
  ],
  opengraphImage: {
    background: require.resolve('./src/assets/og-image-background.png'),
    texts: [
      {
        text: (node) => node.title,
        color: '#ffffff',
        font: require.resolve('./src/assets/Montserrat-SemiBold.ttf'),
        maxWidth: 700,
        maxHeight: 480,
        x: 50,
        y: 515,
        verticalAlign: 'bottom',
      },
      {
        text: 'Christoph Werner •',
        color: '#c6c5dd',
        fontSize: 32,
        font: require.resolve('./src/assets/OpenSans-Regular.ttf'),
        maxWidth: 650,
        maxHeight: 50,
        x: 100,
        y: 580,
        verticalAlign: 'bottom',
      },
      {
        text: (node) =>
          new Date(node.date).toLocaleDateString('en', {
            day: 'numeric',
            month: 'long',
            year: 'numeric',
          }),
        color: '#ffffff',
        fontSize: 32,
        font: require.resolve('./src/assets/OpenSans-Regular.ttf'),
        maxWidth: 432,
        maxHeight: 50,
        x: 318,
        y: 580,
        verticalAlign: 'bottom',
      },
    ],
  },
  syntaxHighlighting: {
    theme: {
      default: 'Slack Theme Ochin',
      parentSelector: {
        'html[data-mode=dark]': 'Slack Theme Dark Mode',
      },
    },
    extensions: ['slack-theme', 'vscode-styled-components'],
    inlineCode: {
      marker: '•',
    },
  },
}

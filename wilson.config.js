const Terser = require('terser')
const colors = require('./src/colors.json')

const setCssVariables = () => {
  document.querySelector('style[data-inject-head]').textContent += [
    // show logo wordmark
    'svg[data-logo]{margin-right:0;}svg[data-logo]>.wordmark{display:inline;}',
    // show color mode toggle
    'button[aria-label="Dark mode"]{display:flex;}',
    // show toggle menu on small screen
    '@media(max-width:1023px){button[aria-label=Menu]{display:flex;}ol[class*=smallMenu]{display:none;}}',
  ].join('')

  const preferDarkQuery = '(prefers-color-scheme: dark)'
  const mediaQueryList = window.matchMedia(preferDarkQuery)
  const supportsColorSchemeQuery = mediaQueryList.media === preferDarkQuery

  document.documentElement.setAttribute(
    'data-mode',
    localStorage.getItem('color-mode') ??
      (supportsColorSchemeQuery
        ? mediaQueryList.matches
          ? 'dark'
          : 'light'
        : 'light')
  )
}

const defaultStyles = `:root{${Object.entries(colors)
  .map(([name, colors]) => `--color-${name}:${colors['light']};`)
  .join('')}}`

const toggleStyles = ['light', 'dark']
  .map(
    (mode) =>
      `:root[data-mode=${mode}]{${Object.entries(colors)
        .map(([name, colors]) => `--color-${name}:${colors[mode]};`)
        .join('')}}`
  )
  .join('')

const mediaQueryStyles = ['light', 'dark']
  .map(
    (mode) =>
      `@media(prefers-color-scheme:${mode}){:root{${Object.entries(colors)
        .map(([name, colors]) => `--color-${name}:${colors[mode]};`)
        .join('')}}}`
  )
  .join('')

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
  injectHead: async () => {
    return `<style data-inject-head>
      ${defaultStyles}
      ${mediaQueryStyles}
      ${toggleStyles}
    </style>
    <script>
      ${(await Terser.minify(`(${String(setCssVariables)})()`)).code};
    </script>`
  },
  layouts: {
    nestedLayouts: [{ pattern: 'writing/**/*', layout: 'blog' }],
  },
  performance: {
    linkPreloadTest: (arg) => {
      console.log(arg)
      return arg === '/writing/' || arg === '/about/'
    },
  },
  pagination: { pageSize: 3 },
  taxonomies: {
    categories: 'category',
    topics: 'topic',
  },
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

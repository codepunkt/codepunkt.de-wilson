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
  languages: [
    {
      code: 'en',
      name: 'English',
      translations: {
        'language-select': 'Select language',
        'menu-home': 'Home',
        'menu-writing': 'Blog',
        'menu-workshops': 'Workshops',
        'menu-about': 'About me',
        'footer-copyright': 'All rights reserved',
        'footer-about':
          'Helping teams deliver better products in less time by teaching web and cloud technologies.',
        'homepage-writing-headline': 'Learning in public',
        'homepage-writing-text': `In tech, you are never done learning. I write about what i've learned on my <a href="/writing/">Blog</a> and on <a href="https://twitter.com/code_punkt" rel="noopener noreferrer" target="_blank">Twitter</a>. Check it out, you might learn a thing or two!`,
        'homepage-interest-headline': 'What sparks my interest',
        'homepage-interest-text': `I'm curious, open-minded and love technology, UI and UX design and video games. I believe in a culture that allows failure, supports experiments and celebrates learnings.`,
        'homepage-world-headline': 'All around the world',
        'homepage-world-text': `I've been building for the web since 1996 and left a footprint in various industries. I live in Paderborn, Germany, where I organise the <a href="https://paderbornjs.org/">Paderborn.js</a> Meetup.`,
        'homepage-job-headline': 'My day job',
        'homepage-job-text': `I'm a Software Architect at <a href="https://www.dspace.com/">dSPACE</a>, where I support multiple scrum teams with web technologies and cloud architecture.`,
        'homepage-contact-headline': 'Contact me',
        'homepage-contact-text': `Want me to identify suitable technologies for your use-case? Interested in exchanging ideas or talking about an article i wrote? I’m always up for a chat. <a href="mailto:&#99;&#104;&#114;&#105;&#115;&#116;&#111;&#112;&#104;&#64;&#99;&#111;&#100;&#101;&#112;&#117;&#110;&#107;&#116;&#46;&#100;&#101;">Get in touch!</a>`,
      },
    },
    {
      code: 'de',
      name: 'Deutsch',
      translations: {
        'language-select': 'Sprache wählen',
        'menu-home': 'Startseite',
        'menu-writing': 'Blog',
        'menu-workshops': 'Schulungen',
        'menu-about': 'Über mich',
        'footer-copyright': 'Alle Rechte vorbehalten',
        'footer-about':
          'Ich helfe Software-Entwicklern dabei, in kürzerer Zeit bessere Produkte zu entwickeln.',
        'homepage-writing-headline': 'Ständiges Lernen',
        'homepage-writing-text': `In der Software-Entwicklung lernt man nie aus. Ich schreibe über das, was ich gelernt habe auf meinem <a href="/writing/">Blog</a> und tausche mich auf <a href="https://twitter.com/code_punkt" rel="noopener noreferrer" target="_blank">Twitter</a> mit euch darüber aus.`,
        'homepage-interest-headline': 'Was mich motiviert',
        'homepage-interest-text': `Ich bin ein neugieriger und aufgeschlossener Mensch der Technik, gutes Design und Computerspiele mag. Ich setze mich für eine positive Fehlerkultur ein, denn aus Fehlern lernt man am besten.`,
        'homepage-world-headline': 'Die Weiten des Internets',
        'homepage-world-text': `Das Web ist seit 1996 meine Spielwiese. Ich lebe und arbeite in Paderborn, wo ich das örtliche <a href="https://paderbornjs.org/">JavaScript Meetup</a> organisiere.`,
        'homepage-job-headline': 'Die Weiten des Internets',
        'homepage-job-text': `Ich bin leitender Software-Architekt bei <a href="https://www.dspace.com/">dSPACE</a>, wo ich einige hundert Software-Entwickler mit Web-Technologien und Cloud-Architektur unterstütze.`,
        'homepage-contact-headline': 'Wie kann ich helfen?',
        'homepage-contact-text': `Ob eine geeignete Architektur oder die Auswahl von Technologien, ob Schulungen für Software-Entwickler oder einfach nur ein Austausch von Ideen &mdash; Ich bin immer für ein Gespräch zu haben. <a href="mailto:&#99;&#104;&#114;&#105;&#115;&#116;&#111;&#112;&#104;&#64;&#99;&#111;&#100;&#101;&#112;&#117;&#110;&#107;&#116;&#46;&#100;&#101;">Sag Hallo!</a>`,
      },
    },
  ],
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
  feeds: [
    {
      output: 'en/writing/rss.xml',
      title: 'Codepunkt - Christoph Werners Blog',
      ttl: 60,
      language: 'en',
      match: '**/pages/en/writing/**',
    },
    {
      output: 'de/writing/rss.xml',
      title: 'Codepunkt - Christoph Werners Blog',
      ttl: 60,
      language: 'de',
      match: '**/pages/de/writing/**',
    },
  ],
}

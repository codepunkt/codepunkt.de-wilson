import { FunctionalComponent } from 'preact'
import 'typeface-fira-code'
import 'typeface-montserrat'
import 'typeface-open-sans'
import 'what-input'
import '../assets/global.scss'
import styles from './layout.module.scss'
import Header from '../components/header'
import Footer from '../components/footer'
import ColorModeProvider from '../components/color-mode-provider'
import { PageProps } from 'wilson'

const Layout: FunctionalComponent<PageProps> = ({ children, translations }) => {
  return (
    <ColorModeProvider>
      <Header />
      <main class={styles.main}>{children}</main>
      <Footer translations={translations} />
    </ColorModeProvider>
  )
}

export default Layout

import { FunctionalComponent } from 'preact'
import { useCurrentLanguageCode } from 'wilson'
import Logo from '../assets/logo.svg?component'
import styles from './header.module.scss'
import Menu from './menu'

const Header: FunctionalComponent = () => {
  const languageCode = useCurrentLanguageCode()
  return (
    <header class={styles.header}>
      <a href={`/${languageCode}/`} class={styles.logoLink}>
        <Logo class={styles.logo} data-logo />
      </a>
      <Menu />
    </header>
  )
}

export default Header

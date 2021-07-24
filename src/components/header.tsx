import { FunctionalComponent } from 'preact'
import Logo from '../assets/logo.svg?component'
import classes from './header.module.scss'
import Menu from './menu'

const Header: FunctionalComponent = () => {
  return (
    <header class={classes.header}>
      <a href="/" class={classes.logoLink}>
        <Logo class={classes.logo} data-logo />
      </a>
      <Menu />
    </header>
  )
}

export default Header

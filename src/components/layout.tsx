import { FunctionalComponent } from 'preact'
import 'typeface-fira-code'
import 'typeface-montserrat'
import 'typeface-open-sans'
import 'what-input'
import '../assets/global.scss'
import Header from '../components/header'
import ColorModeProvider from '../components/color-mode-provider'

const Layout: FunctionalComponent = ({ children }) => {
  return (
    <ColorModeProvider>
      <Header />
      {children}
    </ColorModeProvider>
  )
}

export default Layout

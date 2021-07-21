import { FunctionalComponent } from 'preact'
import 'typeface-fira-code'
import 'typeface-montserrat'
import 'typeface-open-sans'
import 'what-input'
import '../assets/global.scss'
import Header from '../components/header'

const Layout: FunctionalComponent = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

export default Layout

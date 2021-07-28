import { FunctionalComponent } from 'preact'
import '../assets/global.scss'
import Layout from '../components/layout'

const PageLayout: FunctionalComponent = ({ children }) => {
  return <Layout>{children}</Layout>
}

export default PageLayout

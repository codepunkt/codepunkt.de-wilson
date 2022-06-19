import { FunctionalComponent } from 'preact'
import { PageProps } from 'wilson'
import '../assets/global.scss'
import Layout from '../components/layout'

const PageLayout: FunctionalComponent<PageProps> = ({
  children,
  translations,
}) => {
  return <Layout translations={translations}>{children}</Layout>
}

export default PageLayout

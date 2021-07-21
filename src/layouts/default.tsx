import { Frontmatter } from 'wilson'
import { FunctionalComponent } from 'preact'
import '../assets/global.scss'
import Layout from '../components/layout'

const DefaultLayout: FunctionalComponent<{ frontmatter: Frontmatter }> = ({
  children,
  frontmatter,
}) => {
  return <Layout>{children}</Layout>
}

export default DefaultLayout

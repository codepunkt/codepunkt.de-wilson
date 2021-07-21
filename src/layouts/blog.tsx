import { ContentPageProps } from 'wilson'
import { FunctionalComponent } from 'preact'
import Layout from '../components/layout'
import { formatPostDate } from '../utils/date'

const BlogLayout: FunctionalComponent<ContentPageProps> = ({
  children,
  date,
  headings,
  title,
  taxonomies,
}) => {
  return (
    <Layout>
      <time dateTime={new Date(date).toUTCString()}>
        {formatPostDate(date)}
      </time>
      <h1>{title}</h1>
      {children}
      {JSON.stringify(headings)}
    </Layout>
  )
}

export default BlogLayout

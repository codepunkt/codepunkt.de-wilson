import { ContentPageProps, LayoutProps } from 'wilson'
import { FunctionalComponent } from 'preact'
import { formatPostDate } from '../utils/date'

const BlogLayout: FunctionalComponent<LayoutProps> = (props) => {
  const { children, date, frontmatter, title } = props

  return (
    <>
      <time dateTime={date}>{formatPostDate(date)}</time>
      <h1>{title}</h1>
      {children}
    </>
  )
}

export default BlogLayout

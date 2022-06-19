import { PageProps } from 'wilson'
import { FunctionalComponent } from 'preact'
import { formatPostDate } from '../utils/date'

const BlogLayout: FunctionalComponent<PageProps> = (props) => {
  const { children, date, title } = props

  return (
    <>
      <time dateTime={`${date}`}>{formatPostDate(date)}</time>
      <h1>{title}</h1>
      {children}
    </>
  )
}

export default BlogLayout

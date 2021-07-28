import { ContentPageProps } from 'wilson'
import { FunctionalComponent } from 'preact'
import { formatPostDate } from '../utils/date'

const BlogLayout: FunctionalComponent<ContentPageProps> = ({
  children,
  date,
  headings,
  title,
}) => {
  return (
    <>
      <time dateTime={new Date(date).toUTCString()}>
        {formatPostDate(date)}
      </time>
      <h1>{title}</h1>
      {children}
      {JSON.stringify(headings)}
    </>
  )
}

export default BlogLayout

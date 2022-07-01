import { PageProps } from 'wilson'
import { FunctionalComponent } from 'preact'
import { formatPostDate } from '../utils/date'
import styles from './blog.module.scss'

const BlogLayout: FunctionalComponent<PageProps> = (props) => {
  const { children, date, taxonomies, title } = props
  const topics: string[] = Array.isArray(taxonomies?.topics)
    ? taxonomies?.topics ?? []
    : []

  return (
    <>
      <time dateTime={`${date}`} class={styles.postdate}>
        {formatPostDate(date)}
      </time>
      <h1>{title}</h1>
      {topics.length && (
        <ol class={styles.topics}>
          {topics.map((topic) => {
            return <li>{topic}</li>
          })}
        </ol>
      )}
      {children}
    </>
  )
}

export default BlogLayout

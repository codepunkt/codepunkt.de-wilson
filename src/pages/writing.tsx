import { Frontmatter, SelectPageProps } from 'wilson'
import { FunctionalComponent } from 'preact'
import styles from './writing.module.scss'
import { formatPostDate } from '../utils/date'

export const Page: FunctionalComponent<SelectPageProps> = (props) => {
  const { title, pagination, contentPages } = props

  return (
    <div class={styles.wrapper}>
      <h1>{title}</h1>
      <p class={styles.info}>
        Articles and short snippets on a broad spectrum of web- and
        cloud-related development topics. Practical lessons from real world
        projects and observations from evaluation of new technology.
      </p>
      <ol class={styles.posts}>
        {contentPages.map(({ date, description, route, taxonomies, title }) => {
          return (
            <li class={styles.post}>
              <div class={styles.date}>
                <time dateTime={date}>{formatPostDate(+new Date(date))}</time>
              </div>
              <h2 class={styles.postLink}>
                <a href={route}>{title}</a>
              </h2>
              <ul class={styles.postTags}>
                {taxonomies.topics.map((topic) => (
                  <li>
                    <a href={`/topic/${topic}/`}>{topic}</a>
                  </li>
                ))}
              </ul>
              <p class={styles.postText}>{description}</p>
            </li>
          )
        })}
      </ol>
      {pagination.previousPage && (
        <a href={pagination.previousPage}>&lt; Previous</a>
      )}
      {pagination.nextPage && <a href={pagination.nextPage}>Next &gt;</a>}
    </div>
  )
}

export const frontmatter: Frontmatter = {
  title: 'Writing',
  type: 'select',
  selectedTerms: ['writing'],
  taxonomyName: 'categories',
}

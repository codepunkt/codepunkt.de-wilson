import { Frontmatter, SelectPageProps } from 'wilson'
import { FunctionalComponent } from 'preact'

export const Page: FunctionalComponent<SelectPageProps> = ({
  title,
  contentPages,
}) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <ul>
        {contentPages.map(({ route, title }) => (
          <li>
            <a href={route}>{title}</a>
          </li>
        ))}
      </ul>
    </div>
  )
}

export const frontmatter: Frontmatter = {
  title: 'Writing',
  type: 'select',
  selectedTerms: ['writing'],
  taxonomyName: 'categories',
}

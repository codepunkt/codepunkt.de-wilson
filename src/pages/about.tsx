import { Frontmatter } from 'wilson'
import { FunctionalComponent } from 'preact'
import { PageProps } from 'wilson/dist/types'

export const Page: FunctionalComponent<PageProps> = ({ title }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
    </div>
  )
}

export const frontmatter: Frontmatter = {
  title: 'About Me',
}

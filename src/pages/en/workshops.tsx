import { FunctionalComponent } from 'preact'
import { Frontmatter, PageProps } from 'wilson'

export const Page: FunctionalComponent<PageProps> = ({ title }) => {
  return (
    <div class="container">
      <h1>{title}</h1>
    </div>
  )
}

export const frontmatter: Frontmatter = {
  title: 'Workshops',
}

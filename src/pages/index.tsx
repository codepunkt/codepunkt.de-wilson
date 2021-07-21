import { Frontmatter } from 'wilson'
import { FunctionalComponent } from 'preact'
import { ContentPageProps } from '../../../wilson/dist/types'

export const Page: FunctionalComponent<ContentPageProps> = ({ title }) => {
  return (
    <div class="container">
      <h1>{title}</h1>
    </div>
  )
}

export const frontmatter: Frontmatter = {
  title: 'Hey, my name is Christoph',
}

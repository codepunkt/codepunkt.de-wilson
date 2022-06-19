import { FunctionalComponent } from 'preact'
import { Frontmatter, PageProps } from 'wilson'
import styles from '../about.module.scss'
import me from '../../assets/me.jpg'

export const Page: FunctionalComponent<PageProps> = ({ title }) => {
  return (
    <div class="container">
      <h1>{title}</h1>
      <p>
        The web is my passion since 1996, when i developed my first websites.
        I've always liked the idea of people all across the globe being able to
        communicate with and learn from one another.
      </p>
      <p>
        I have a bachelor and a diploma in Computer Sciences, but everything I
        know about the web platform and cloud services today is self-taught. I
        consider myself blessed that I get to build great stuff and help others
        do the same for a living.
      </p>
      <img src={me} class={styles.profileImage} />
      <p>
        One of the major requirements for staying relevant in the web and cloud
        ecosystem is to always continue learning. This suits me, because i'm a
        curious and open-minded person who always like to learn and improve.
      </p>
      <p>
        I enjoy sharing my knowledge and helping others adopt the technologies
        I'm passionate about. I have a keen interest in user experience,
        developer productivity and security.
      </p>
      <p>
        When not dabbling with web and cloud technology, I’m usually playing
        videogames or reading books or comics. I have slightly elitist views on
        beer, love to travel the world with my wife and friends and have spent
        most of my adult life trying to get into a regular exercising habit.
      </p>
      <p>
        If you'd like me to speak at your event or teach you or your team web
        and cloud technologies, please pop me an email – I'm always up for a
        chat! I can also help making the right choices on project start or
        consult on improving what you already have.
      </p>
      <p>
        I also tweet as <a href="mailto:">@code_punkt</a> – feel free to contact
        me there on anything else.
      </p>
    </div>
  )
}

export const frontmatter: Frontmatter = {
  title: 'About me',
}

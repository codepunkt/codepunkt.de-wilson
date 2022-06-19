import { FunctionalComponent } from 'preact'
import { Frontmatter, PageProps } from 'wilson'
import styles from '../about.module.scss'
import me from '../../assets/me.jpg'

export const Page: FunctionalComponent<PageProps> = ({ title }) => {
  return (
    <div className="container">
      <h1>{title}</h1>
      <div class={styles.columns}>
        <p>
          Seit meiner Jugend faszinieren mich das Internet und das World Wide
          Web. Meine erste Webseite habe ich 1996 erstellt. Ich finde es
          gleichsam großartig und faszinierend, dass diese Technologien Menschen
          auf der ganzen Welt erlauben, miteinander zu kommunizieren und
          voneinander zu lernen. Ich bin Diplom-Informatiker, habe mir aber fast
          alles, was ich heute über Web-Entwicklung, Software-Architektur und
          Cloud-Dienste weiss, selbst beigebracht.
        </p>
        <img src={me} class={styles.profileImage} />
        <p>
          Ich freue mich, immer wieder an interessanten Projekten arbeiten zu
          können und andere dabei zu unterstützen, dasselbe zu tun.
        </p>
        <p>Multiplikator</p>
        <p>
          Eine der wichtigsten Voraussetzungen, um im Web- und Cloud-Ökosystem
          relevant zu bleiben, besteht darin, immer weiter zu lernen. Das passt
          zu mir, weil ich ein neugieriger und aufgeschlossener Mensch bin, der
          immer gerne dazulernt und sich verbessert.
        </p>
        <p>
          Es macht mir Spaß, mein Wissen zu teilen und anderen zu helfen, die
          Technologien zu übernehmen, für die ich mich interessiere. Ich
          interessiere mich sehr für Benutzererfahrung, Entwicklerproduktivität
          und Sicherheit.
        </p>
        <p>
          Wenn ich mich nicht mit Web- und Cloud-Technologie beschäftige, spiele
          ich normalerweise Videospiele oder lese Bücher oder Comics. Ich habe
          eine leicht elitäre Einstellung zu Bier, bereise gerne die Welt mit
          meiner Frau und meinen Freunden und habe den größten Teil meines
          Erwachsenenlebens damit verbracht, regelmäßig Sport zu treiben.
        </p>
        <p>
          Wenn Sie möchten, dass ich bei Ihrer Veranstaltung spreche oder Ihnen
          oder Ihrem Team Web- und Cloud-Technologien beibringe, senden Sie mir
          bitte eine <a href="">E-Mail</a> – ich bin immer für ein Gespräch zu
          haben! Ich kann auch helfen, die richtigen Entscheidungen beim
          Projektstart zu treffen, oder Sie bei der Verbesserung dessen beraten,
          was Sie bereits haben.
        </p>
        <p>
          Ich twittere auch als @code_punkt – kontaktieren Sie mich dort gerne
          für alles andere.
        </p>
      </div>
    </div>
  )
}

export const frontmatter: Frontmatter = {
  title: 'Über mich',
}

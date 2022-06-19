import { FunctionalComponent } from 'preact'
import { Frontmatter, PageProps } from 'wilson'
import styles from '../legal-notice.module.scss'

export const Page: FunctionalComponent<PageProps> = ({ title }) => {
  return (
    <div className={styles.legal}>
      <h1>{title}</h1>
      <p>Information in accordance with § 5 German Broadcast Media Act (TMG)</p>
      <p>Responsible for content according to § 55 paragraph 2 RStV:</p>
      <p>
        Christoph Werner
        <br />
        Messdornstrasse 25
        <br />
        33106 Paderborn
        <br />
        <a href="mailto:christoph+legal@codepunkt.de">
          christoph+legal@codepunkt.de
        </a>
      </p>
      <h3>Exemption from liability</h3>
      <h4>Liability for content</h4>
      <p>
        While the contents of our pages have been created with utmost care and
        due diligence, we cannot assume liability for the completeness and
        timeliness of the contents. Pursuant to § 7, Paragraph 1 of the German
        Broadcast Media Act (TMG), and in accordance with general law, as
        service provider we are responsible for our own content on this web
        page. However, according to §§ 8 to 10 TMG we, as service provider, are
        neither obliged to monitor transmitted or stored external information,
        nor to research circumstances that suggest an illegal activity.
        Obligations to remove or block the use of information remain, in
        accordance with legal regulations, unaffected. Any liability in this
        respect can be assumed only from the moment that knowledge of the
        specific breach of law is obtained. In the event that the corresponding
        violations become known, we shall remove these contents immediately.
      </p>
      <h4>Liability for links</h4>
      <p>
        Our offer contains links to external websites operated by third parties,
        on whose contents we have no influence. Therefore, we cannot assume
        liability for these contents. Instead, it is the relevant supplier or
        operator of the linked web pages who is responsible for the content of
        these pages. The linked pages were inspected for possible legal
        infringements at the time the link was established. At the time of
        linking, no unlawful contents were detectable. Permanent monitoring of
        the content of the linked pages is infeasible without any specific
        indication of an infringement of rights. In the event that corresponding
        violations become known, we shall remove the corresponding links
        immediately.
      </p>
      <h3>Copyright</h3>
      <p>
        The contents and works on these websites, as prepared and displayed by
        its operator, are subject to German copyright law. Their duplication,
        processing, distribution, or any form of commercialization beyond the
        scope of the copyright law requires the written consent of the
        respective author or creator. Copies and downloads are allowed solely
        for private and non-commercial purposes. Insofar as this page's contents
        were not created by its operator, third-party copyrights will be
        respected and observed. Should you still have reason to believe that a
        copyright violation has occurred despite the precautionary measures
        taken, we kindly ask you to notify us. In the event that the
        corresponding violations become known, we shall remove this content
        immediately.
      </p>
      <h3>Data and privacy protection</h3>
      <p>
        It is usually possible to use our web page without providing personal
        information. Collection of personal data (e.g. name, address, or
        email-address) will be optional where possible. Without your explicit
        consent, your data will not be passed on to third parties. Further
        particulars are governed by our General Terms and Conditions.
      </p>
      <p>
        We would like to point out that the transfer of data via the internet
        (e.g. when communicating via e-mail) may involve security gaps. A
        complete protection of data against third-party access is impossible.
      </p>
      <p>
        {' '}
        We explicitly prohibit the use of the contact data published within the
        framework of this imprint by third parties for sending non-requested
        advertising material and information. The operator of the pages reserve
        the right to take legal action in the case of transmission of
        non-solicited advertising material (e. g. spam mail).
      </p>
      <h3>Server data</h3>
      <p>
        For technical reasons u.a. The following data, which your Internet
        browser transmits to us or to our web space provider, is recorded
        (so-called server log files):
      </p>
      <ul>
        <li>Browser type and version</li>
        <li>Operating system and version</li>
        <li>Website from which you visited us (Referrer URL)</li>
        <li>Website you visit</li>
        <li>Date and time of your access</li>
        <li>Your internet protocol (IP) address</li>
      </ul>
      <p>
        These anonymous data are stored separately from any personal information
        that you may provide and so do not allow any conclusions to be drawn
        about a particular person. They are evaluated for statistical purposes
        in order to optimize our website and our offers.
      </p>
    </div>
  )
}

export const frontmatter: Frontmatter = {
  title: 'Legal notice',
}

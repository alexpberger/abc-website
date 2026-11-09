import { site } from "../content/site";
import layout from "../styles/layout.module.css";
import section from "../styles/section.module.css";

import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section
      className={styles.section}
      id={site.contact.id}
      aria-labelledby="contact-title"
    >
      <div className={layout.inner}>
        <div className={styles.grid}>
          <p className={`section-label ${styles.label}`}>
            {site.contact.label}
          </p>
          <h2 id="contact-title" className={`${section.heading} ${styles.title}`}>
            {site.contact.title}
          </h2>
          <hr className={`${section.rule} ${styles.rule}`} />
          <p className={`${section.copy} ${styles.lead}`}>{site.contact.lead}</p>
          <a className={styles.email} href={site.mailto}>
            {site.email}
          </a>
          <p className={styles.github}>
            <a href={site.githubUrl}>{site.githubLabel}</a>
          </p>
        </div>
      </div>
    </section>
  );
}

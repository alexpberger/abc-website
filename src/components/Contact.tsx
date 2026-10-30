import { site } from "../content/site";
import layout from "../styles/layout.module.css";
import section from "../styles/section.module.css";

import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section
      className={`${section.block} ${section.ruled}`}
      id={site.contact.id}
      aria-labelledby="contact-title"
    >
      <div className={layout.inner}>
        <p className="section-label">{site.contact.label}</p>
        <h2 id="contact-title" className={section.heading}>
          {site.contact.title}
        </h2>
        <hr className={section.rule} />
        <p className={section.copy}>{site.contact.lead}</p>
        <a className={styles.email} href={site.mailto}>
          {site.email}
        </a>
        <p className={styles.github}>
          <a href={site.githubUrl}>{site.githubLabel}</a>
        </p>
      </div>
    </section>
  );
}

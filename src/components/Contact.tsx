import { site } from "../content/site";
import layout from "../styles/layout.module.css";
import section from "../styles/section.module.css";

import styles from "./Contact.module.css";

export function Contact() {
  return (
    <section
      className={`${section.block} ${section.ruled}`}
      id={site.contact.id}
      aria-labelledby="demo-title contact-title"
    >
      <div className={layout.inner}>
        <div className={styles.columns}>
          <div className={styles.column}>
            <p className="section-label">{site.demo.label}</p>
            <h2 id="demo-title" className={section.heading}>
              {site.demo.title}
            </h2>
            <hr className={section.rule} />
            <div>
              <p className={`${section.copy} ${styles.copy}`}>{site.demo.body}</p>
              <a
                className={`${styles.link} ${styles.cta}`}
                href={site.demo.href}
                target="_blank"
                rel="noopener noreferrer"
              >
                {site.demo.cta} <span aria-hidden="true">↗</span>
              </a>
            </div>
          </div>
          <div className={styles.column}>
            <p className="section-label">{site.contact.label}</p>
            <h2 id="contact-title" className={section.heading}>
              {site.contact.title}
            </h2>
            <hr className={section.rule} />
            <div>
              <p className={`${section.copy} ${styles.copy}`}>
                {site.contact.lead}{" "}
                <a className={styles.link} href={site.mailto}>
                  {site.email}
                </a>
                {site.contact.follow}{" "}
                <a
                  className={styles.link}
                  href={site.linkedinUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {site.linkedinLabel}
                </a>
                .
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

import { site } from "../content/site";
import layout from "../styles/layout.module.css";
import section from "../styles/section.module.css";

import styles from "./Introduction.module.css";

export function Introduction() {
  return (
    <section
      className={`${section.block} ${section.ruled}`}
      id={site.introduction.id}
      aria-labelledby="about-title"
    >
      <div className={layout.inner}>
        <h2 id="about-title" className="section-label">
          {site.introduction.label}
        </h2>
        <div className={styles.copy}>
          {site.introduction.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

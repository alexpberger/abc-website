import { site } from "../content/site";
import section from "../styles/section.module.css";

import styles from "./Situations.module.css";

export function Situations() {
  return (
    <section
      className={section.block}
      id={site.situations.id}
      aria-labelledby="work-heading"
    >
      <h2 id="work-heading" className="section-label">
        {site.situations.label}
      </h2>
      <hr className={section.rule} />
      <div className={styles.grid}>
        {site.situations.items.map((item, index) => (
          <article className={styles.card} key={item.title}>
            <p className={styles.index} aria-hidden="true">
              {String(index + 1).padStart(2, "0")}
            </p>
            <h3 className={styles.title}>{item.title}</h3>
            <p className={styles.body}>{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

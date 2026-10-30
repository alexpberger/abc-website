import { site } from "../content/site";
import layout from "../styles/layout.module.css";
import section from "../styles/section.module.css";

import styles from "./Credentials.module.css";

export function Credentials() {
  return (
    <section
      className={`${section.block} ${section.ruled}`}
      id={site.credentials.id}
      aria-labelledby="experience-title"
    >
      <div className={layout.inner}>
        <h2 id="experience-title" className="section-label">
          {site.credentials.label}
        </h2>
        <ul className={styles.grid}>
          {site.credentials.items.map((item) => (
            <li key={item.title}>
              <h3 className={styles.title}>{item.title}</h3>
              <p className={styles.body}>{item.body}</p>
            </li>
          ))}
        </ul>
        <p className={styles.certification}>{site.credentials.certification}</p>
      </div>
    </section>
  );
}

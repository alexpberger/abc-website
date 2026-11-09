import { site } from "../content/site";
import layout from "../styles/layout.module.css";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${layout.inner} ${styles.inner}`}>
        <p className={styles.meta}>
          {site.footer.parts.map((part, index) => (
            <span key={part}>
              <span className={styles.part}>{part}</span>
              {index < site.footer.parts.length - 1 ? "\u00A0· " : null}
            </span>
          ))}
        </p>
      </div>
    </footer>
  );
}

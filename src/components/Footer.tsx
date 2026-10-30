import { site } from "../content/site";
import layout from "../styles/layout.module.css";

import styles from "./Footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`${layout.inner} ${styles.inner}`}>
        <p>{site.name}</p>
        <a href={site.mailto}>{site.email}</a>
      </div>
    </footer>
  );
}

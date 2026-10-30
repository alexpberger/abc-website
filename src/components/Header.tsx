import { images } from "../assets/images";
import { site } from "../content/site";
import layout from "../styles/layout.module.css";

import styles from "./Header.module.css";

export function Header() {
  return (
    <header className={styles.header} id="top">
      <div className={`${layout.inner} ${styles.bar}`}>
        <a className={styles.brand} href="#top">
          <img
            className={styles.logo}
            src={images.logo.src}
            width={images.logo.width}
            height={images.logo.height}
            alt=""
          />
          <span>{site.name}</span>
        </a>
        <nav className={styles.nav} aria-label="Sections">
          {site.navigation.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className={item.href === "#contact" ? styles.contact : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
      </div>
    </header>
  );
}

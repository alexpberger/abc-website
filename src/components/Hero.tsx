import { images } from "../assets/images";
import { site } from "../content/site";

import styles from "./Hero.module.css";

export function Hero() {
  return (
    <section className={styles.hero} aria-labelledby="hero-title">
      <div className={styles.copy}>
        <p className="section-label">{site.hero.eyebrow}</p>
        <h1 id="hero-title" className={styles.title}>
          {site.hero.title}
        </h1>
        <hr className={styles.rule} />
        <p className={styles.lead}>{site.hero.lead}</p>
        <a className={`button ${styles.cta}`} href={site.mailto}>
          {site.hero.cta}
        </a>
      </div>
      <img
        className={styles.portrait}
        src={images.portrait.src}
        width={images.portrait.width}
        height={images.portrait.height}
        alt="Alex Berger"
        fetchPriority="high"
      />
    </section>
  );
}

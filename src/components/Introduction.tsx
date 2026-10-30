import { site } from "../content/site";
import layout from "../styles/layout.module.css";
import section from "../styles/section.module.css";

export function Introduction() {
  return (
    <section
      className={`${section.block} ${section.ruled}`}
      id={site.introduction.id}
      aria-labelledby="about-title"
    >
      <div className={layout.inner}>
        <p className="section-label">{site.introduction.label}</p>
        <h2 id="about-title" className={section.heading}>
          {site.introduction.title}
        </h2>
        <hr className={section.rule} />
        <div className={section.copy}>
          {site.introduction.paragraphs.map((paragraph) => (
            <p key={paragraph}>{paragraph}</p>
          ))}
        </div>
      </div>
    </section>
  );
}

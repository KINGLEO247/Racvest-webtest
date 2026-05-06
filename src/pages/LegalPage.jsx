export default function LegalPage({ description, pills, sections, title }) {
  return (
    <section className="legal-page">
      <div className="legal-wrap">
        <div className="legal-hero">
          <div className="section-label">Legal</div>
          <h1>{title}</h1>
          <p>{description}</p>
          <div className="legal-meta">
            {pills.map((pill) => (
              <span className="legal-pill" key={pill}>
                {pill}
              </span>
            ))}
          </div>
        </div>

        <div className="legal-content">
          {sections.map((section) => (
            <article className="legal-card reveal" key={section.title}>
              <h2>{section.title}</h2>
              {section.paragraphs?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
              {section.list ? (
                <ul className="legal-list">
                  {section.list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              ) : null}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

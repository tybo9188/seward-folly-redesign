import styles from './ArticlePage.module.css';

const ArticleBody = ({ paragraphs = [] }) => (
  <div className={styles.articleBody}>
    {paragraphs.map((item, idx) => {
      switch (item.type) {
        case 'text':
          return (
            <p
              key={idx}
              dangerouslySetInnerHTML={{ __html: item.html }}
            />
          );

        case 'figure':
          return (
            <figure key={idx}>
              <div
                className={styles.articleInlineImg}
                style={{ background: item.gradient }}
              />
              {item.caption && <figcaption>{item.caption}</figcaption>}
            </figure>
          );

        case 'blockquote':
          return (
            <blockquote key={idx}>
              <p>{item.text}</p>
              {item.cite && <cite>{item.cite}</cite>}
            </blockquote>
          );

        case 'inline-ad':
          return (
            <div key={idx} className={styles.articleInlineAd}>
              <div className={styles.articleInlineAdLabel}>Advertisement</div>
              <div className={styles.articleInlineAdBox}>
                <span>
                  300&times;250
                  <br />
                  <a href="#">Advertise here</a>
                </span>
              </div>
            </div>
          );

        default:
          return null;
      }
    })}
  </div>
);

export default ArticleBody;

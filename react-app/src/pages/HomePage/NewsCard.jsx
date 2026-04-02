import styles from './HomePage.module.css';

const NewsCard = ({ headline, excerpt, meta, gradient, href }) => (
  <article className={styles.feedCard}>
    <a href={href || '#'} className={styles.feedCardImgLink}>
      <div
        className={styles.feedCardImgPlaceholder}
        style={{ background: gradient }}
      />
    </a>
    <div className={styles.feedCardBody}>
      <h2 className={styles.feedCardHeadline}>
        <a href={href || '#'}>{headline}</a>
      </h2>
      <p className={styles.feedCardExcerpt}>{excerpt}</p>
      <div className={styles.feedCardMeta}>{meta}</div>
    </div>
  </article>
);

export default NewsCard;

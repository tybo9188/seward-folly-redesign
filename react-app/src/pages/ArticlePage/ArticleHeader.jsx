import styles from './ArticlePage.module.css';

const ArticleHeader = ({ category, categoryHref, headline, excerpt, author, date, dateISO }) => (
  <header className={styles.articleHeader}>
    <div className={styles.articleCategory}>
      <a href={categoryHref}>{category}</a>
    </div>
    <h1 className={styles.articleHeadline}>{headline}</h1>
    <p className={styles.articleExcerpt}>{excerpt}</p>
    <div className={styles.articleMeta}>
      <span className={styles.articleMetaAuthor}>{author}</span>
      <span className={styles.articleMetaSep}>|</span>
      <time dateTime={dateISO}>{date}</time>
    </div>
  </header>
);

export default ArticleHeader;

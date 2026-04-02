import { Link } from 'react-router-dom';
import styles from './HomePage.module.css';

const HeroCard = ({ headline, excerpt, meta, gradient, href }) => (
  <article className={styles.feedCardHero}>
    <Link to={href || '/'} className={styles.heroImgLink}>
      <div
        className={styles.heroImgPlaceholder}
        style={{ background: gradient }}
      />
    </Link>
    <div className={styles.heroBody}>
      <h2 className={styles.heroHeadline}>
        <Link to={href || '/'}>{headline}</Link>
      </h2>
      <p className={styles.heroExcerpt}>{excerpt}</p>
      <div className={styles.heroMeta}>{meta}</div>
    </div>
  </article>
);

export default HeroCard;

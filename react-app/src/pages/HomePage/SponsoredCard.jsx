import styles from './HomePage.module.css';

const SponsoredCard = ({ headline, excerpt, gradient, ctaText, ctaHref }) => (
  <article className={styles.feedCardSponsored}>
    <div className={styles.feedCardSponsoredLabelAbove}>Sponsored</div>
    <a href={ctaHref || '#'} className={styles.feedCardImgLink}>
      <div
        className={styles.feedCardImgPlaceholder}
        style={{ background: gradient }}
      />
    </a>
    <div className={`${styles.feedCardBody} ${styles.sponsoredBody}`}>
      <div className={styles.feedCardSponsoredBodyBefore}>Sponsored</div>
      <h2 className={styles.sponsoredHeadline}>
        <a href={ctaHref || '#'}>{headline}</a>
      </h2>
      <p className={styles.sponsoredExcerpt}>{excerpt}</p>
      <a href={ctaHref || '#'} className={styles.feedCardCta}>
        {ctaText}
      </a>
    </div>
  </article>
);

export default SponsoredCard;

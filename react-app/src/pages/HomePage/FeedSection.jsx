import HeroCard from './HeroCard';
import NewsCard from './NewsCard';
import SponsoredCard from './SponsoredCard';
import styles from './HomePage.module.css';

const FeedSection = ({ id, title, sponsor, cards, adSlot }) => {
  const renderCard = (card, index) => {
    switch (card.type) {
      case 'hero':
        return (
          <HeroCard
            key={index}
            headline={card.headline}
            excerpt={card.excerpt}
            meta={card.meta}
            gradient={card.gradient}
            href={card.link}
          />
        );
      case 'sponsored':
        return (
          <SponsoredCard
            key={index}
            headline={card.headline}
            excerpt={card.excerpt}
            gradient={card.gradient}
            ctaText={card.ctaText}
            ctaHref={card.ctaHref}
          />
        );
      default:
        return (
          <NewsCard
            key={index}
            headline={card.headline}
            excerpt={card.excerpt}
            meta={card.meta}
            gradient={card.gradient}
            href={card.link}
          />
        );
    }
  };

  return (
    <>
      <div className={styles.feedSectionRow}>
        <section className={styles.feedSection} id={id}>
          <div className={styles.feedSectionHeader}>
            <h2 className={styles.feedSectionTitle}>{title}</h2>
            <div className={styles.feedSectionLine} />
          </div>

          <div className={styles.feedUnderwriting}>
            <span className={styles.feedUnderwritingLabel}>Underwritten by</span>
            <span className={styles.feedUnderwritingSponsor}>{sponsor}</span>
            {' \u00B7 '}
            <a href="#">Become an underwriter</a>
          </div>

          {cards.map((card, index) => renderCard(card, index))}

          {title !== 'Featured' && (
            <div className={styles.feedSectionFooter}>
              <div className={styles.feedSectionActions}>
                <a href="#" className={styles.feedSectionMore}>
                  More {title} &rarr;
                </a>
              </div>
            </div>
          )}
        </section>

        <div className={styles.feedSectionRowAd}>
          <div className={styles.adLabel}>Advertisement</div>
          <div className={styles.adBox}>
            <div className={styles.adPlaceholder}>
              300 &times; 300
              <br />
              <a href="#">
                Advertise with
                <br />
                The Folly
              </a>
            </div>
          </div>
        </div>
      </div>

      {adSlot && (
        <div className={styles.feedAdBetween}>
          <div className={styles.adLabel}>Advertisement</div>
          <div className={`${styles.adBox} ${styles.feedAdBetweenBox}`}>
            <div className={styles.adPlaceholder}>
              300 &times; 300
              <br />
              <a href="#">Advertise with The Folly</a>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default FeedSection;

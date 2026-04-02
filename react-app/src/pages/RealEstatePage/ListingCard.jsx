import StatsGrid from './StatsGrid';
import styles from './RealEstatePage.module.css';

const ListingCard = ({ address, city, gradient, stats, facts, agent, brokerage }) => (
  <div className={styles.listingCard}>
    <div
      className={styles.listingCardImg}
      style={{ background: gradient }}
    />
    <div className={styles.listingCardBody}>
      <h3 className={styles.listingCardAddress}>{address}</h3>
      <p className={styles.listingCardCity}>{city}</p>

      <StatsGrid stats={stats} />

      <ul className={styles.listingCardFacts}>
        {facts.map((fact, idx) => (
          <li key={idx}>{fact}</li>
        ))}
      </ul>

      <div className={styles.listingCardFooter}>
        <div className={styles.listingCardAgent}>
          <strong>{agent}</strong> &middot; {brokerage}
        </div>
        <a href="#" className={styles.listingCardView}>View listing</a>
      </div>
    </div>
  </div>
);

export default ListingCard;

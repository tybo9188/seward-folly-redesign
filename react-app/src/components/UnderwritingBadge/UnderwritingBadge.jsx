import styles from './UnderwritingBadge.module.css';

const UnderwritingBadge = ({ sponsor = 'Your Business Name', variant = 'feed' }) => {
  const wrapClass = variant === 'article' ? styles.article : styles.feed;

  return (
    <div className={wrapClass}>
      <span className={styles.label}>Underwritten by</span>
      <span className={styles.sponsor}>{sponsor}</span>
      {' · '}
      <a href="#">Become an underwriter</a>
    </div>
  );
};

export default UnderwritingBadge;

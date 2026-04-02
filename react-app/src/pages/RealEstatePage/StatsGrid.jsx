import styles from './RealEstatePage.module.css';

const StatsGrid = ({ stats = [] }) => (
  <div className={styles.statsGrid}>
    {stats.map((stat, idx) => (
      <div
        key={idx}
        className={`${styles.statCell} ${stat.highlight ? styles.statCellHighlight : ''}`}
      >
        <div className={styles.statCellVal}>{stat.value}</div>
        <div className={styles.statCellLbl}>{stat.label}</div>
      </div>
    ))}
  </div>
);

export default StatsGrid;

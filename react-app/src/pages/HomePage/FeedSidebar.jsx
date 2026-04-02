import styles from './HomePage.module.css';

const FeedSidebar = ({ links }) => (
  <aside className={styles.feedSidebar}>
    <div className={styles.feedSidebarLabel}>This Week</div>
    <ul className={styles.feedSidebarLinks}>
      {links.map((link) => (
        <li key={link.href}>
          <a href={link.href} className={styles.feedSidebarLink}>
            {link.label}
          </a>
        </li>
      ))}
    </ul>
  </aside>
);

export default FeedSidebar;

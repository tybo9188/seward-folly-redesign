import { Link } from 'react-router-dom';
import MountainLogo from './MountainLogo';
import Button from '../Button/Button';
import styles from './Masthead.module.css';

const Masthead = ({ onMenuOpen }) => (
  <header className={styles.masthead}>
    <div className={styles.spacer} />

    <Link to="/" className={styles.logoWrap}>
      <MountainLogo className={styles.mountain} />
      <h1 className={styles.title}>The Seward Folly</h1>
    </Link>

    <div className={styles.right}>
      <Button
        variant="subscribe"
        href="#"
        className={styles.subscribeDesktop}
      >
        Subscribe
      </Button>
      <button
        className={styles.hamburger}
        onClick={onMenuOpen}
        aria-label="Menu"
      >
        <span className={styles.hamburgerLines}>
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
          <span className={styles.hamburgerLine} />
        </span>
      </button>
    </div>
  </header>
);

export default Masthead;

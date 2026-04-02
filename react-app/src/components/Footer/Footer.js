import { footerColumns } from '../../data/footerData';
import styles from './Footer.module.css';

const Footer = () => (
  <footer className={styles.footer}>
    <div className="container">
      <div className={styles.grid}>
        {/* Brand column */}
        <div>
          <h3 className={styles.brandTitle}>The Seward Folly</h3>
          <p className={styles.mission}>
            Seward, Alaska&#39;s community-owned news source. Independent,
            nonprofit journalism covering the stories that matter to our
            neighbors.
          </p>
          <div className={styles.social}>
            <a href="#" aria-label="Facebook">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z" />
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" />
                <circle cx="12" cy="12" r="5" />
                <circle cx="17.5" cy="6.5" r="1.5" />
              </svg>
            </a>
            <a href="#" aria-label="X">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
              </svg>
            </a>
          </div>
        </div>

        {/* Link columns */}
        {footerColumns.map((col) => (
          <div key={col.heading}>
            <h4 className={styles.colHeading}>{col.heading}</h4>
            <ul className={styles.links}>
              {col.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
            {col.heading === 'About' && (
              <div className={styles.contact}>
                P.O. Box 1983 &middot; Seward, AK 99664
                <br />
                sewardsfolly25@gmail.com
              </div>
            )}
          </div>
        ))}
      </div>

      <div className={styles.bottom}>
        <span>&copy; 2026 The Seward Folly. All rights reserved.</span>
        <span>Made with care in Seward, Alaska</span>
      </div>
    </div>
  </footer>
);

export default Footer;

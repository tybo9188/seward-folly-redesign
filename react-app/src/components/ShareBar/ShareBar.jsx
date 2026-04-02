import {
  EmailIcon,
  FacebookIcon,
  InstagramIcon,
  TikTokIcon,
  RedditIcon,
  XIcon,
  PrintIcon,
} from './icons';
import styles from './ShareBar.module.css';

const buttons = [
  { label: 'Email', Icon: EmailIcon },
  { label: 'Facebook', Icon: FacebookIcon },
  { label: 'Instagram', Icon: InstagramIcon },
  { label: 'TikTok', Icon: TikTokIcon },
  { label: 'Reddit', Icon: RedditIcon },
  { label: 'X', Icon: XIcon },
  { label: 'Print', Icon: PrintIcon },
];

const ShareBar = () => (
  <div className={styles.shareBar}>
    <span className={styles.label}>Share</span>
    {buttons.map(({ label, Icon }) => (
      <button key={label} className={styles.btn} aria-label={label}>
        <Icon />
        <span>{label}</span>
      </button>
    ))}
  </div>
);

export default ShareBar;

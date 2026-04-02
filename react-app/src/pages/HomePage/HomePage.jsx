import { sections } from '../../data/homePageData';
import { sidebarLinks } from '../../data/sidebarLinks';
import FeedSidebar from './FeedSidebar';
import FeedSection from './FeedSection';
import styles from './HomePage.module.css';

const HomePage = () => (
  <div className={styles.feedLayout}>
    <FeedSidebar links={sidebarLinks} />

    <div className={styles.feedMain}>
      {sections.map((section, index) => (
        <FeedSection
          key={section.id}
          id={section.id}
          title={section.title}
          sponsor={section.sponsor}
          cards={section.cards}
          adSlot={index < sections.length - 1}
        />
      ))}
    </div>
  </div>
);

export default HomePage;

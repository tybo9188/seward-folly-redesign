import styles from './MoreStories.module.css';

const MoreStories = ({ heading = 'More Stories', stories = [] }) => (
  <section className={styles.moreStories}>
    <h2 className={styles.heading}>{heading}</h2>
    <div className={styles.list}>
      {stories.map((story, idx) => (
        <a key={idx} href="#" className={styles.card}>
          <div
            className={styles.imgPlaceholder}
            style={{ background: story.gradient || 'var(--sage)' }}
          />
          <div className={styles.text}>
            <span className={styles.category}>{story.category}</span>
            <h3 className={styles.title}>{story.title}</h3>
            <span className={styles.meta}>{story.meta}</span>
          </div>
        </a>
      ))}
    </div>
  </section>
);

export default MoreStories;

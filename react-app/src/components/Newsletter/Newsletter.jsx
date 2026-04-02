import styles from './Newsletter.module.css';

const Newsletter = () => (
  <section className={styles.newsletter}>
    <div className={`container ${styles.inner}`}>
      <div className={styles.text}>
        <p className={styles.kicker}>Stay Connected</p>
        <h2 className={styles.heading}>The Seward Folly Newsletter</h2>
        <p className={styles.sub}>
          Local news, events &amp; community stories — delivered to your inbox.
        </p>
      </div>
      <form className={styles.form} onSubmit={(e) => e.preventDefault()}>
        <input
          className={styles.input}
          type="email"
          placeholder="Your email address"
          aria-label="Email address"
        />
        <button className={styles.submit} type="submit">
          Sign Up
        </button>
      </form>
    </div>
  </section>
);

export default Newsletter;

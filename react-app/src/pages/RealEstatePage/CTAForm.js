import { useState } from 'react';
import styles from './RealEstatePage.module.css';

const CTAForm = () => {
  const [form, setForm] = useState({
    name: '',
    email: '',
    interest: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className={styles.reCtaForm}>
      <h3 className={styles.reCtaFormHeading}>
        Buying or selling in Seward?
      </h3>
      <p className={styles.reCtaFormSub}>
        Tell us what you're looking for. We're exploring how The Folly can be
        helpful to buyers and sellers in the Seward housing market.
      </p>

      <form onSubmit={handleSubmit}>
        <div className={styles.reFormRow}>
          <input
            className={styles.reInput}
            type="text"
            name="name"
            placeholder="Your name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            className={styles.reInput}
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
        </div>

        <select
          className={styles.reSelect}
          name="interest"
          value={form.interest}
          onChange={handleChange}
        >
          <option value="">I'm interested in...</option>
          <option value="buying">Buying a home</option>
          <option value="selling">Selling a home</option>
          <option value="renting">Renting</option>
          <option value="other">Something else</option>
        </select>

        <textarea
          className={styles.reTextarea}
          name="message"
          placeholder="Anything you'd like us to know?"
          value={form.message}
          onChange={handleChange}
        />

        <button type="submit" className={styles.reSubmit}>
          Send
        </button>
      </form>

      {submitted && (
        <p className={styles.reSuccess}>
          Thanks! We'll be in touch.
        </p>
      )}
    </div>
  );
};

export default CTAForm;

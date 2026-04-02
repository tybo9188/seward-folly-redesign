import { useState } from 'react';
import { menuSections, contactInfo } from '../../data/menuData';
import Button from '../Button/Button';
import styles from './SlideMenu.module.css';

const SlideMenu = ({ isOpen, onClose }) => {
  const [openSections, setOpenSections] = useState({});

  const toggleSection = (id) => {
    setOpenSections((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <>
      {/* Overlay */}
      <div
        className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
        onClick={onClose}
      />

      {/* Panel */}
      <nav
        className={`${styles.slideMenu} ${isOpen ? styles.slideMenuOpen : ''}`}
        aria-label="Main navigation"
      >
        {/* Close button */}
        <div className={styles.close}>
          <button
            className={styles.closeBtn}
            onClick={onClose}
            aria-label="Close menu"
          >
            &#10005;
          </button>
        </div>

        {/* Mobile subscribe */}
        <div className={styles.subscribeMobile}>
          <Button variant="subscribe" href="#" style={{ width: '100%', justifyContent: 'center' }}>
            Subscribe
          </Button>
        </div>

        {/* Accordion sections */}
        {menuSections.map((section) => (
          <div key={section.id} className={styles.section}>
            <button
              className={`${styles.heading} ${openSections[section.id] ? styles.headingOpen : ''}`}
              onClick={() => toggleSection(section.id)}
            >
              {section.title}
              <span className={styles.arrow}>&#9662;</span>
            </button>
            <ul
              className={`${styles.links} ${openSections[section.id] ? styles.linksOpen : ''}`}
            >
              {section.links.map((link) => (
                <li key={link}>
                  <a href="#">{link}</a>
                </li>
              ))}
            </ul>
          </div>
        ))}

        {/* Contact info */}
        <div className={styles.contact}>
          {contactInfo.address}
          <br />
          <a href={`mailto:${contactInfo.email}`}>{contactInfo.email}</a>
        </div>
      </nav>
    </>
  );
};

export default SlideMenu;

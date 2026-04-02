import styles from './AdBox.module.css';

const AdBox = ({ width = 300, height = 300, sticky = false, label = 'Advertisement' }) => (
  <div className={sticky ? styles.sticky : undefined}>
    <div className={styles.label}>{label}</div>
    <div
      className={styles.box}
      style={{ width: `${width}px`, height: `${height}px` }}
    >
      <span className={styles.placeholder}>
        {width}&times;{height}
        <br />
        <a href="#">Advertise here</a>
      </span>
    </div>
  </div>
);

export default AdBox;

import styles from './Button.module.css';

const variantMap = {
  subscribe: styles.subscribe,
  cta: styles.cta,
  outline: styles.outline,
};

const Button = ({ variant = 'subscribe', href, onClick, children, className, style }) => {
  const classes = [styles.btn, variantMap[variant], className].filter(Boolean).join(' ');

  if (href) {
    return (
      <a href={href} className={classes} style={style} onClick={onClick}>
        {children}
      </a>
    );
  }

  return (
    <button className={classes} style={style} onClick={onClick}>
      {children}
    </button>
  );
};

export default Button;

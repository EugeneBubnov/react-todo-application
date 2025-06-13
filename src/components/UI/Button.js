import styles from './Button.module.css';

export default function Button(props) {
  const { children, disabled = false } = props;
  return (
    <button {...props} disabled={disabled} className={styles.button}>
      {children}
    </button>
  );
}

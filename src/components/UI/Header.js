import styles from './Header.module.css';
import logoIcon from '../../images/headerIcons/logo.ico';

export default function Header() {
  return (
    <div className={styles.header}>
      <div className={styles.logo}>
        <img src={logoIcon} alt="logo" />
        Todo List
      </div>
    </div>
  );
}

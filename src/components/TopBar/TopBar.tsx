import Logo from './Logo';
import styles from './TopBar.module.css';

const TopBar = () => {
  return (
    <div className={styles.main}>
      <Logo />
    </div>
  );
};

export default TopBar;

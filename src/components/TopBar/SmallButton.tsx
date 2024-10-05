import styles from './SmallButton.module.css';
import TonIcon from './TonIcon';

const SmallButton = () => {
  return (
    <button className={styles.button}>
      <TonIcon />
      <a href="https://t.me/+DfVHYdrJowAzNGU1">Connect wallet</a>
    </button>
  );
};

export default SmallButton;

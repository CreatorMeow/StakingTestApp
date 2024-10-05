import styles from './Security.module.css';
import { ShieldCheck } from '@phosphor-icons/react';

const Security = () => {
  return (
    <div className={styles.container}>
      <ShieldCheck size={34} color="#68EEC2" />
      <div className={styles.ratingContainer}>
        <div className={styles.rating}>
          <p className={styles.subtitle}>94.49 / 100</p>
          <div className={styles.badge}>High score</div>
        </div>
        <p className={styles.description}>7 highlights & 0 alerts</p>
      </div>
    </div>
  );
};

export default Security;

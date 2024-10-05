import { Clock, Coins, TreasureChest } from '@phosphor-icons/react';
import styles from './Overview.module.css';

const Overview = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <Clock size={34} color="#68EEC2" />
        <p>
          Withdraw <br /> at any time
        </p>
      </div>
      <div className={styles.section}>
        <Coins size={34} color="#68EEC2" />
        <p>
          Rewards <br /> every 18h
        </p>
      </div>
      <div className={styles.section}>
        <TreasureChest size={34} color="#68EEC2" />
        <p>
          Min stake <br /> of 1 TON
        </p>
      </div>
    </div>
  );
};

export default Overview;

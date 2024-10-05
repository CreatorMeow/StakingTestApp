import styles from './Details.module.css';

const Details = () => {
  return (
    <div className={styles.container}>
      <div className={styles.section}>
        <h2 className={styles.title}>#1</h2>
        <p className={styles.subtitle}>
          Staking on <br /> TON
        </p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>$148.1M</h2>
        <p className={styles.subtitle}>TVL</p>
      </div>
      <div className={styles.section}>
        <h2 className={styles.title}>66920</h2>
        <p className={styles.subtitle}>Stakers now</p>
      </div>
    </div>
  );
};

export default Details;

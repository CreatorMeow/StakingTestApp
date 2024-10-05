import styles from './Description.module.css';

interface Props {
  tsTON?: number;
}

const Description = ({ tsTON }: Props) => {
  return (
    <div className={styles.container}>
      <div className={styles.textContainer}>
        <p>You'll get</p>
        <p className={styles.right} style={{ color: '#7676AD' }}>
          {tsTON} tsTON
        </p>
      </div>
      <div className={styles.textContainer}>
        <p>Historical APY</p>
        <p className={styles.right}>3.69%</p>
      </div>
      <div className={styles.textContainer}>
        <p>Exchange rate</p>
        <p className={styles.right} style={{ color: '#7676AD' }}>
          1 tsTON = 1.037 TON
        </p>
      </div>
    </div>
  );
};

export default Description;

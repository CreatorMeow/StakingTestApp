import styles from './Tabs.module.css';
import { useState } from 'react';

const Tabs = () => {
  const [mode, setMode] = useState('stake');

  return (
    <div className={styles.container}>
      <div className={styles.tabs}>
        <button
          className={mode === 'stake' ? styles.button : styles.unselected}
          onClick={() => setMode('stake')}
        >
          Stake
        </button>
        <button
          className={mode === 'tokens' ? styles.button : styles.unselected}
          onClick={() => setMode('tokens')}
        >
          Tokens
        </button>
      </div>
      <div className={styles.value}>USD</div>
    </div>
  );
};

export default Tabs;

import styles from './Button.module.css';
import { useTonConnectUI } from '@tonconnect/ui-react';
import { useTonWallet } from '@tonconnect/ui-react';

const Button = () => {
  const wallet = useTonWallet();
  const [tonConnectUI] = useTonConnectUI();

  return !wallet ? (
    <button className={styles.button} onClick={() => tonConnectUI.openModal()}>
      Connect wallet to stake
    </button>
  ) : (
    <button className={styles.button} onClick={() => tonConnectUI.openModal()}>
      {wallet.account.address}
    </button>
  );
};

export default Button;

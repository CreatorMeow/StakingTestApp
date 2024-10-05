import styles from './Subtitle.module.css';

interface Props {
  text?: string;
}

const Subtitle = ({ text }: Props) => {
  return <h2 className={styles.text}>{text}</h2>;
};

export default Subtitle;

import styles from './TonIcon.module.css';

const TonIcon = () => {
  return (
    <div className={styles.icon}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="14.93"
        height="14.93"
        fill="none"
        viewBox="0 0 15 15"
      >
        <path
          fill="currentColor"
          d="M12.394.333H2.94C1.202.333.1 2.21.973 3.724L6.81 13.838a.99.99 0 0 0 1.716 0l5.836-10.114c.873-1.514-.228-3.39-1.966-3.39M6.804 10.62v.186l-1.271-2.46-3.066-5.485a.536.536 0 0 1 .472-.8h3.864v8.56m6.061-7.759L9.8 8.348l-1.27 2.458V2.059h3.864c.424 0 .674.45.472.802"
        />
      </svg>
    </div>
  );
};

export default TonIcon;

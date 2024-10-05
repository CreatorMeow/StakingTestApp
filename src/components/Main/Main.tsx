import { useState } from 'react';
import styles from './Main.module.css';
import Slider from './Slider';
import Button from './Button/Button';
import Description from './Description/Description';
import Overview from './Overview/Overview';
import Subtitle from '../Subtitle/Subtitle';
import Details from './Details/Details';
import Security from './Security/Security';
import CommunityButton from './CommunityButton/CommunityButton';

const Main = () => {
  const [value, setValue] = useState(5165.5);

  return (
    <div className={styles.main}>
      <div>
        <h1 className={styles.text}>
          <span>
            You could earn <br />
          </span>
          <span className={styles.amount}>
            ${Math.round(value * 190) / 100}{' '}
          </span>
          <span>in TON yearly</span>
        </h1>
        <p style={{ marginBottom: '20px', textAlign: 'left' }}>
          It's estimated at ${Math.round(value * 91) / 100} in TON in 3 months.
        </p>
      </div>
      <div className={styles.stake}>
        <p
          style={{
            marginLeft: '16px',
            marginTop: '16px',
            marginBottom: '4px',
            marginRight: '0px',
            textAlign: 'left',
          }}
        >
          You stake
        </p>
        <p className={styles.stakeBalance}>
          <span>{value}</span>
          <span className={styles.currency}> in TON</span>
        </p>
        <Slider
          min={10}
          max={20000}
          value={value}
          onChange={(value) => setValue(value)}
        />
      </div>
      <Button />
      <CommunityButton />
      <Description tsTON={Math.round((value / 4.81) * 100) / 100} />
      <Subtitle text="Overview" />
      <Overview />
      <Subtitle text="Protocol details" />
      <Details />
      <Subtitle text="Security ratings" />
      <Security />
    </div>
  );
};

export default Main;

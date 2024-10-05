import TopBar from './components/TopBar/TopBar';
import styles from './App.module.css';
import Tabs from './components/Tabs/Tabs';
import Main from './components/Main/Main';
import { TonConnectUIProvider } from '@tonconnect/ui-react';

function App() {
  return (
    <TonConnectUIProvider manifestUrl="https://serene-trifle-9b0ad3.netlify.app/manifest.json">
      <div className={styles.screen}>
        <TopBar></TopBar>
        <Tabs></Tabs>
        <Main></Main>
      </div>
    </TonConnectUIProvider>
  );
}

export default App;

import { ConstructorPage, NotFound404, Feed } from '@pages';
import '../../index.css';
import styles from './app.module.css';
import { Routes, Route } from 'react-router-dom';

import { AppHeader } from '@components';

const App = () => (
  <div className={styles.app}>
    <AppHeader />
    <Routes>
      <Route path='/' element={<ConstructorPage />} />
      <Route path='*' element={<NotFound404 />} />
      <Route path='/feed' element={<Feed />} />
    </Routes>
  </div>
);

export default App;

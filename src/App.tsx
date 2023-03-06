import { FC } from 'react';

import Router from './router';
import ThemeProvider from './theme';

const App: FC = () => {
  return (
    <ThemeProvider>
      <Router />
    </ThemeProvider>
  );
};

export default App;

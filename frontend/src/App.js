// routes
import GlobalStyles from './theme/globalStyles';
import Router from './routes';
// theme
import ThemeConfig from './theme';
// components
import { useState } from 'react';
import { BaseOptionChartStyle } from './theme/BaseOptionChart';

// ----------------------------------------------------------------------

export default function App() {

  const [darkMode, setDarkMode] = useState(true);

  function handleChange() {
    setDarkMode(!darkMode);
  }

  return (
    <ThemeConfig darkMode={darkMode}>
      <GlobalStyles />
      <BaseOptionChartStyle />
      <Router setDarkMode={handleChange} darkMode={darkMode} />
    </ThemeConfig>
  );
}

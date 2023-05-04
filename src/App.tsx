import { ThemeProvider } from '@mui/material';
import './App.css';
import Main from './layout/index';
import theme from './themes/index';

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Main />
    </ThemeProvider>
  );
}

export default App;

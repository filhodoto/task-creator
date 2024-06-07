import Router from '@/routes/Routes';
import NavBar from '@/components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { teal } from '@mui/material/colors';

// Define here, but in a bigger project we should create a file for the theme
const theme = createTheme({
  palette: {
    primary: teal,
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <BrowserRouter>
        <NavBar />
        <Container maxWidth="xl">
          <Router />
        </Container>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;

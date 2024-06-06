import Router from '@/routes/Routes';
import NavBar from '@/components/NavBar';
import { BrowserRouter } from 'react-router-dom';
import { Container } from '@mui/material';

function App() {
  return (
    <BrowserRouter>
      <NavBar />
      <Container maxWidth="xl">
        <Router />
      </Container>
    </BrowserRouter>
  );
}

export default App;

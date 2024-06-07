import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { navPages } from '@/routes/routePages';
import { Link as RouterLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 6, alignItems: 'center' }}>
      <Box sx={{ maxWidth: 'xl', width: 1 }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            Task Creator
          </Typography>
          <div style={{ flexGrow: 1 }} />
          {navPages.map(({ path, title }) => (
            <Button
              key={title}
              component={RouterLink}
              to={path}
              color="inherit"
            >
              {title}
            </Button>
          ))}
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;

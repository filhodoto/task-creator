import React from 'react';
import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import pagesData from '@/routes/pagesData';
import { Link as RouterLink } from 'react-router-dom';

const NavBar: React.FC = () => {
  return (
    <AppBar position="static" sx={{ marginBottom: 3, alignItems: 'center' }}>
      <Box sx={{ maxWidth: 'xl', width: 1 }}>
        <Toolbar variant="dense">
          <Typography variant="h6" color="inherit" component="div">
            My Tasks
          </Typography>
          <div style={{ flexGrow: 1 }} />
          {pagesData.map(({ path, title }) => (
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

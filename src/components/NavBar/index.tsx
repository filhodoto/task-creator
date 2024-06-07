import { AppBar, Toolbar, Typography, Button, Box } from '@mui/material';
import { navPages } from '@/routes/routePages';
import { useTheme } from '@mui/material/styles';
import { Link as RouterLink } from 'react-router-dom';
import AssignmentIcon from '@mui/icons-material/Assignment';
import GroupsIcon from '@mui/icons-material/Groups';
import AssignmentTurnedInIcon from '@mui/icons-material/AssignmentTurnedIn';

const NavBar: React.FC = () => {
  const theme = useTheme();
  // TODO:: This logic is very flawed and dependent on btn text, would need to do something better
  const renderBtnIcon = (title: string) => {
    return title === 'users' ? <GroupsIcon /> : <AssignmentIcon />;
  };
  return (
    <AppBar position="static" sx={{ marginBottom: 6, alignItems: 'center' }}>
      <Box sx={{ maxWidth: 'xl', width: 1 }}>
        <Toolbar
          variant="dense"
          sx={{ display: 'flex', justifyContent: 'space-between' }}
        >
          <Box sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <AssignmentTurnedInIcon sx={{ fontSize: 40 }} />
            <Typography
              variant="body1"
              color="inherit"
              sx={{ display: { xs: 'none', sm: 'block' } }}
            >
              TASK CREATOR
            </Typography>
          </Box>
          <Box sx={{ display: 'flex' }}>
            {navPages.map(({ path, title }) => (
              <Button
                key={title}
                component={RouterLink}
                to={path}
                color="inherit"
                size="large"
                sx={{ marginLeft: theme.spacing(2) }}
                startIcon={renderBtnIcon(title)}
              >
                {title}
              </Button>
            ))}
          </Box>
        </Toolbar>
      </Box>
    </AppBar>
  );
};

export default NavBar;

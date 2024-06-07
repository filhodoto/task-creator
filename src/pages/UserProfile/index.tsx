import { useFetchUserByIdQuery } from '@/services/users';
import { Location, useLocation } from 'react-router-dom';
import {
  Alert,
  Avatar,
  Box,
  Fade,
  List,
  ListItem,
  ListItemText,
  Paper,
  Typography,
} from '@mui/material';
import CircularLoader from '@/components/CircularLoader';
import { useTheme } from '@mui/material/styles';
import ListItemIcon from '@mui/material/ListItemIcon';
import BusinessIcon from '@mui/icons-material/Business';
import WorkIcon from '@mui/icons-material/Work';
import EmailIcon from '@mui/icons-material/Email';
import HeightIcon from '@mui/icons-material/Height';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import PersonIcon from '@mui/icons-material/Person';
interface LocationStateProps {
  userId: number;
}

const UserProfile = () => {
  const theme = useTheme();

  // Get user id from props passe in link
  const location: Location<LocationStateProps> = useLocation();
  const { userId } = location.state;

  const {
    data: profile,
    error,
    isLoading,
    isFetching,
  } = useFetchUserByIdQuery(userId);

  return (
    <>
      <CircularLoader isLoading={isLoading} isFetching={isFetching} />
      {error && (
        <Alert severity="warning" sx={{ width: 'auto', maxWidth: 500 }}>
          Something wen't wrong. Couldn't find user with id {userId}
        </Alert>
      )}
      {profile && (
        <Fade in>
          <Box
            sx={{
              display: 'flex',
              justifyContent: 'center',
            }}
          >
            <Paper
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                padding: theme.spacing(3),
                borderRadius: theme.shape.borderRadius,
                boxShadow: theme.shadows[2],
                maxWidth: 'sm',
                width: '100%',
              }}
            >
              <Avatar
                src={profile.image}
                sx={{
                  width: theme.spacing(15),
                  height: theme.spacing(15),
                  marginBottom: theme.spacing(2),
                }}
              />
              <Typography
                variant="h4"
                component="h1"
                marginBottom={theme.spacing(5)}
              >
                {profile.firstName} {profile.lastName}
              </Typography>

              <List
                sx={{
                  width: '100%',
                  display: 'grid',
                  gap: 2,
                  gridTemplateColumns: {
                    sm: 'repeat(2, 1fr)',
                  },
                }}
              >
                <ListItem>
                  <ListItemIcon>
                    <BusinessIcon sx={{ fontSize: 50 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Company"
                    secondary={profile.company.name}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <WorkIcon sx={{ fontSize: 50 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Position"
                    secondary={`${profile.company.title} - ${profile.company.department}`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <PersonIcon sx={{ fontSize: 50 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Username"
                    secondary={profile.username}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <EmailIcon sx={{ fontSize: 50 }} />
                  </ListItemIcon>
                  <ListItemText primary="Email" secondary={profile.email} />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <HeightIcon sx={{ fontSize: 50 }} />
                  </ListItemIcon>
                  <ListItemText
                    primary="Height"
                    secondary={`${profile.height.toFixed(1)} cm`}
                  />
                </ListItem>
                <ListItem>
                  <ListItemIcon>
                    <CalendarTodayIcon sx={{ fontSize: 50 }} />
                  </ListItemIcon>
                  <ListItemText primary="Age" secondary={profile.age} />
                </ListItem>
              </List>
            </Paper>
          </Box>
        </Fade>
      )}
    </>
  );
};

export default UserProfile;

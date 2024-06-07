import { useFetchUserByIdQuery } from '@/services/users';
import { Location, useLocation } from 'react-router-dom';
import { Alert, Box, Typography } from '@mui/material';
import CircularLoader from '@/components/CircularLoader';
import WarningIcon from '@mui/icons-material/Warning';

interface LocationStateProps {
  userId: number;
}

const UserProfile = () => {
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
        <Box>
          <Typography variant="h6" component="h2">
            Name: {profile.firstName} {profile.lastName}
          </Typography>
          <Typography>Company: {profile.company.name}</Typography>
          <Typography>
            Position: {profile.company.title} - {profile.company.department}
          </Typography>
          <Typography>Username: {profile.username}</Typography>
          <Typography>Email: {profile.email}</Typography>
          <Typography>height: {profile.height}</Typography>
          <Typography>age: {profile.age}</Typography>
        </Box>
      )}
    </>
  );
};

export default UserProfile;

import { useFetchUserByIdQuery } from '@/services/users';
import { Location, useLocation } from 'react-router-dom';
import { Box, Typography } from '@mui/material';
import QueryFeedback from '@/components/QueryFeedback';

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
      <QueryFeedback
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
      />
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

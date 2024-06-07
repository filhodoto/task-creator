import { Alert, Fade, Grid, Typography } from '@mui/material';

import { useFetchUsersQuery } from '@/services/users';
import UserCard from '@/components/UserCard';
import CircularLoader from '@/components/CircularLoader';

const Users = () => {
  const { data, error, isLoading, isFetching } = useFetchUsersQuery();

  return (
    <>
      <Typography
        variant="h4"
        component="h1"
        sx={{
          marginBottom: 4,
        }}
      >
        List of interesting people
      </Typography>
      {error && (
        <Alert severity="warning" sx={{ width: 'auto', maxWidth: 500 }}>
          Something wen't wrong. Retrieve users
        </Alert>
      )}

      <CircularLoader isLoading={isLoading} isFetching={isFetching} />

      {data && data.users && (
        <Fade in>
          <Grid container spacing={2}>
            {data.users.map((user) => {
              return (
                <Grid item key={user.id} xs={12} sm={6} md={3}>
                  <UserCard {...user} />
                </Grid>
              );
            })}
          </Grid>
        </Fade>
      )}
    </>
  );
};

export default Users;

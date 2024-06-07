import { Grid, Typography } from '@mui/material';

import { useFetchUsersQuery } from '@/services/users';
import UserCard from '@/components/UserCard';

const Users = () => {
  // TODO:: Type this correctly
  const { data, error, isLoading } = useFetchUsersQuery();

  console.log('data >>> ', data);
  console.log('isLoading >>> ', isLoading);
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
      {isLoading && <Typography>Loading...</Typography>}
      {error && <Typography color="error">Something wen't wrong</Typography>}
      <Grid container spacing={2}>
        {data &&
          data.users &&
          data.users.map((user) => {
            return (
              <Grid item key={user.id} xs={12} sm={6} md={3}>
                <UserCard {...user} />
              </Grid>
            );
          })}
      </Grid>
    </>
  );
};

export default Users;

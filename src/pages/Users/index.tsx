import { Grid, Typography } from '@mui/material';

import { useFetchUsersQuery } from '@/services/users';
import UserCard from '@/components/UserCard';
import QueryFeedback from '@/components/QueryFeedback';

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
      <QueryFeedback
        error={error}
        isLoading={isLoading}
        isFetching={isFetching}
      />
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

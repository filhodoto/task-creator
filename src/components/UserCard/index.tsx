import React from 'react';
import {
  Avatar,
  Box,
  Button,
  Card,
  CardActions,
  CardContent,
  Typography,
} from '@mui/material';
import { Link as RouterLink } from 'react-router-dom';
import { UserProps } from '@/store/slices/usersSlice';

const UserCard = (props: UserProps) => {
  const { id, firstName, lastName, image, email, company } = props;
  return (
    <Card
      sx={{
        boxShadow: 'lg',
      }}
    >
      <CardContent
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          textAlign: 'center',
        }}
      >
        <Avatar src={image} />
        <Box paddingY={2}>
          <Typography variant="h6" component="h2">
            {firstName} {lastName}
          </Typography>
          <Typography>{company.name}</Typography>
          <Typography>
            {company.title} - {company.department}
          </Typography>
          <Typography variant="body2">{email}</Typography>
        </Box>
        <CardActions>
          <Button
            size="small"
            variant="outlined"
            component={RouterLink}
            to={`${id}`}
            state={{ userId: id }}
          >
            view profile
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default UserCard;

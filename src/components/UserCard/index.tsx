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
import { useTheme } from '@mui/material/styles';

export interface UserProps {
  id: number;
  firstName: string;
  lastName: string;
  image: string;
  email: string;
  company: {
    department: string;
    name: string;
    title: string;
  };
  height: number;
  age: number;
  username: string;
}

const UserCard = (props: UserProps) => {
  const theme = useTheme();
  const { id, firstName, lastName, image, email } = props;
  return (
    <Card
      sx={{
        backgroundColor: theme.palette.background.paper,
        borderRadius: theme.shape.borderRadius,
        boxShadow: theme.shadows[2],
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

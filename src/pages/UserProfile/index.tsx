import React from 'react';
import { useFetchUserByIdQuery } from '@/services/users';
import { Location, useLocation } from 'react-router-dom';

interface LocationStateProps {
  userId: string;
}

const UserProfile = () => {
  // Get user id from props passe in link
  const location: Location<LocationStateProps> = useLocation();

  const { userId = 3 } = location.state;

  const { data, error, isLoading } = useFetchUserByIdQuery(userId);

  return <>{isLoading ? <p>Loading</p> : <div>User Profile - {userId}</div>}</>;
};

export default UserProfile;

import React from 'react';
import { Location, useLocation } from 'react-router-dom';

interface LocationStateProps {
  userId: string;
}

const UserProfile = () => {
  // Get user id from props passe in link
  const location: Location<LocationStateProps> = useLocation();

  const { userId } = location.state;

  return <div>User Profile - {userId}</div>;
};

export default UserProfile;

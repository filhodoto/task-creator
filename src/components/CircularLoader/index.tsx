import { Box, CircularProgress, Typography } from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface QueryFeedbackProps {
  isLoading: boolean;
  isFetching: boolean;
  error: SerializedError | FetchBaseQueryError | undefined;
}

// Component to show user feedback when we make an API query. Created to prevent DRY
const CircularLoader = ({ isLoading, isFetching }: QueryFeedbackProps) => {
  return <>{(isLoading || isFetching) && <CircularProgress />}</>;
};

export default CircularLoader;

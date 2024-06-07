import { Typography } from '@mui/material';
import { SerializedError } from '@reduxjs/toolkit';
import { FetchBaseQueryError } from '@reduxjs/toolkit/query';

interface QueryFeedbackProps {
  isLoading: boolean;
  isFetching: boolean;
  error: SerializedError | FetchBaseQueryError | undefined;
}

// Component to show user feedback when we make an API query. Created to prevent DRY
const QueryFeedback = ({
  isLoading,
  isFetching,
  error,
}: QueryFeedbackProps) => {
  return (
    <>
      {(isLoading || isFetching) && <Typography>Loading...</Typography>}
      {error && <Typography color="error">Something wen't wrong</Typography>}
    </>
  );
};

export default QueryFeedback;

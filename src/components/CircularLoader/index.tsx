import { CircularProgress } from '@mui/material';
interface QueryFeedbackProps {
  isLoading: boolean;
  isFetching: boolean;
}

// Component to show user feedback when we make an API query. Created to prevent DRY
const CircularLoader = ({ isLoading, isFetching }: QueryFeedbackProps) => {
  return <>{(isLoading || isFetching) && <CircularProgress />}</>;
};

export default CircularLoader;

import Users from '@pages/Users';
import TaskList from '@pages/TaskList';
import UserProfile from '@/pages/UserProfile';

export interface routerProps {
  title: string;
  path: string;
  element: JSX.Element;
}

// Define routes for pages that should show in navigation header
export const navPages: routerProps[] = [
  {
    path: '/',
    element: <TaskList />,
    title: 'list',
  },
  {
    path: '/users',
    element: <Users />,
    title: 'users',
  },
];

// Define routes for generic pages that won't show on navigation
const otherPages: routerProps[] = [
  {
    path: '/users/*',
    element: <UserProfile />,
    title: 'user',
  },
];

const routePages = [...navPages, ...otherPages];

export default routePages;

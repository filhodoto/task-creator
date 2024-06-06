import Users from '@pages/Users';
import TaskList from '@pages/TaskList';
import UserProfile from '@/pages/UserProfile';

export interface routerProps {
  title: string;
  path: string;
  element: JSX.Element;
}

const routePages: routerProps[] = [
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
  {
    path: '/users/*',
    element: <UserProfile />,
    title: 'users',
  },
];

export default routePages;

import Users from '@pages/Users';
import TaskList from '@pages/TaskList';

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
];

export default routePages;

import Users from '@pages/Users';
import TaskList from '@pages/TaskList';

export interface routerProps {
  title: string;
  path: string;
  element: JSX.Element;
}

const pagesData: routerProps[] = [
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

export default pagesData;

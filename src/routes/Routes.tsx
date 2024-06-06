import { Route, Routes } from 'react-router-dom';
import routePages, { routerProps } from './routePages';

const Router = () => {
  return (
    <Routes>
      {routePages.map(({ path, title, element }: routerProps) => {
        return <Route key={title} path={path} element={element} />;
      })}
    </Routes>
  );
};

export default Router;

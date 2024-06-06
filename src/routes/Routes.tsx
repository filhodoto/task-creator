import { Route, Routes } from 'react-router-dom';
import pagesData, { routerProps } from './pagesData';

const Router = () => {
  return (
    <Routes>
      {pagesData.map(({ path, title, element }: routerProps) => {
        return <Route key={title} path={path} element={element} />;
      })}
    </Routes>
  );
};

export default Router;

import { createBrowserRouter } from 'react-router-dom';
import { MainLayout, ItemShowCase } from '../components';

const router = createBrowserRouter([
  {
    path: '/',
    element: <MainLayout />,
  },
  {
    path: '/item',
    element: <ItemShowCase />,
  },
]);

export { router };
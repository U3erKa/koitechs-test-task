import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, User } from './pages';
import { ROUTES } from './const';
import './App.scss';

const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.USER, element: <User /> },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

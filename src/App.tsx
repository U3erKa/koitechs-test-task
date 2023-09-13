import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, User } from './pages';
import { getUserData, getUserRepos } from './api';
import { ROUTES } from './const';
import './App.scss';

const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <Home /> },
  {
    path: ROUTES.USER,
    element: <User />,
    async loader({ params }) {
      const [user, repos] = await Promise.all([
        getUserData(params.username!),
        getUserRepos(params.username!, undefined, Number.MAX_SAFE_INTEGER),
      ]);
      return [user.data, repos.data];
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

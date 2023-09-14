import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import { Home, User, UserNotFound } from './pages';
import { getUserData, getUserRepos } from './api';
import { ROUTES, INITIALLY_LOADED_REPOS } from './const';

const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <Home /> },
  {
    path: ROUTES.USER,
    element: <User />,
    errorElement: <UserNotFound />,
    async loader({ params }) {
      const [user, repos] = await Promise.all([
        getUserData(params.username!),
        getUserRepos(params.username!, undefined, INITIALLY_LOADED_REPOS),
      ]);
      return [user.data, repos.data];
    },
  },
]);

function App() {
  return <RouterProvider router={router} />;
}

export default App;

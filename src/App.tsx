import {
  RouterProvider,
  createBrowserRouter,
  useMatch,
} from 'react-router-dom';
import './App.scss';

const ROUTES = Object.freeze({ HOME: '/', USER: '/:username' });

const router = createBrowserRouter([
  { path: ROUTES.HOME, element: <Home /> },
  { path: ROUTES.USER, element: <User /> },
]);

function Home() {
  return <div>Home</div>;
}

function User() {
  const { params } = useMatch(ROUTES.USER)!;

  return <div>{params.username}</div>;
}

function App() {
  return <RouterProvider router={router} />;
}

export default App;

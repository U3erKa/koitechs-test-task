import { useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../const';

export default function UserNotFound() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(ROUTES.HOME);
    }, 10 * 1000);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <main>
      <h1>Oops...</h1>
      <p>
        Could not load user info... Make sure to spell the username correctly
      </p>
      <p>
        You will be navigated to homepage soon.{' '}
        <Link to={ROUTES.HOME}>Go back now!</Link>
      </p>
    </main>
  );
}

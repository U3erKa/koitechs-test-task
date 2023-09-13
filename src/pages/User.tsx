import { useMatch } from 'react-router-dom';
import { ROUTES } from '../const';

export default function User() {
  const { params } = useMatch(ROUTES.USER)!;

  return <div>{params.username}</div>;
}

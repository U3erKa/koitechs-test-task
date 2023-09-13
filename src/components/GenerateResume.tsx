import { useState, type FormEvent, type ChangeEvent } from 'react';
import { useNavigate } from 'react-router-dom';

export default function GenerateResume() {
  const [username, setUsername] = useState('');
  const navigate = useNavigate();

  function handleChange(event: ChangeEvent<HTMLInputElement>): void {
    setUsername(event.target.value);
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    navigate(username);
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={
          'Enter your GitHub username and then click "Generate" button or press "Enter"'
        }
        value={username}
        onChange={handleChange}
      />
      <button type="submit">Generate</button>
    </form>
  );
}

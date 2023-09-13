import { type FormEvent } from "react";

export default function GenerateResume() {
  function handleSubmit(event: FormEvent<HTMLFormElement>): void {
    event.preventDefault();
    throw new Error('Function not implemented.');
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder={'Enter your GitHub username and then click "Generate" button or press "Enter"'} />
      <button type="submit">Generate</button>
    </form>
  );
}

import { FC, useState } from 'react';

export const LoginPage: FC = () => {
  const [query, setQuery] = useState('');

  const handleChangeQuery = (newQuery: string) => {
    setQuery(newQuery);
  };

  return (
    <div className="todoapp">
      <h1 className="todoapp__title">
        Get your userId
      </h1>
      <h1>Email</h1>
      <div className="todoapp__content">
        <input
          type="email"
          className="todoapp__new-todo"
          onChange={(event) => handleChangeQuery(event.target.value)}
          value={query}
        />
      </div>
    </div>
  );
};

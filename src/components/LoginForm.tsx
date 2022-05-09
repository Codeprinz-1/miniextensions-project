import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClassDataList } from '../redux/actions/classData';
import { updateUsername } from '../redux/actions/username';

const LoginForm = () => {
  const dispatch = useDispatch();
  const username = useSelector((state: ReduxState) => state.username);

  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(updateUsername(e.target.value));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch<any>(getClassDataList(username.trim()));
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Student name:
        <input
          autoFocus
          type="text"
          onChange={handleNameChange}
          value={username}
        />
      </label>
      <button type="submit">Login</button>
    </form>
  );
};

export default LoginForm;

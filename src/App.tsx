import React from 'react';
import LoginForm from './components/LoginForm';
import { useDispatch, useSelector } from 'react-redux';
import { LogoutButton, Wrapper, Error } from './styled-components/App.styled';
import ClassCard from './components/ClassCard';
import { clearClassDataList } from './redux/actions/classData';
import { updateUsername } from './redux/actions/username';

const App = () => {
  const dispatch = useDispatch();

  const status = useSelector((state: ReduxState) => state.classDataList.status);
  const error = useSelector((state: ReduxState) => state.classDataList.error);
  const classDataList = useSelector(
    (state: ReduxState) => state.classDataList.data
  );

  const handleLogout = () => {
    dispatch(clearClassDataList());
    dispatch(updateUsername(''));
  };

  return (
    <Wrapper>
      {status === 'SUCCESS' && (
        <LogoutButton onClick={handleLogout}>Logout</LogoutButton>
      )}
      {classDataList.map(classData => (
        <ClassCard
          key={classData.name}
          name={classData.name}
          students={classData.students}
        />
      ))}
      {status === 'PENDING' && <div>loading...</div>}
      {(status === 'DEFAULT' || status === 'ERROR') && <LoginForm />}
      {status === 'ERROR' && <Error>{error}</Error>}
    </Wrapper>
  );
};

export default App;

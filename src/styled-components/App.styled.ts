import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 20px;
  padding: 20px;
  position: relative;
`;

export const LogoutButton = styled.button`
  position: absolute;
  top: 15px;
  right: 15px;
`;

export const Error = styled.div`
  color: red;
`;

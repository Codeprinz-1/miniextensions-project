import styled from 'styled-components';

export const Container = styled.div`
  border-radius: 5px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  max-width: 350px;
  padding: 20px;
  border: 2px solid #ccc;
`;

export const Text = styled.p<{ bold?: boolean }>`
  ${({ bold }) => bold && `font-weight: bold; margin-top: 5px;`}
  padding: 0px;
  margin: 0px;
`;

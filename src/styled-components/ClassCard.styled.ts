import styled from "styled-components";

export const Container = styled.div`
  width: 500px;
  padding: 20px;
  border: 2px solid #ccc;
`;

export const Text = styled.p<{ bold?: boolean }>`
  ${({ bold }) => bold && `font-weight: bold; margin-top: 5px;`}
  padding: 0px;
  margin: 0px;
`;

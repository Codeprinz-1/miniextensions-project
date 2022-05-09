import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  body {
    margin: 0;
    padding: 0;

    * {
      box-sizing: border-box;
    }
    
    button {
        font-size: 0.75rem;
    }
  }
`;

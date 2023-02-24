import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
    * {
        margin: 0;
        padding: 0;
    }
    button,
    img,
    a {
    all: unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;

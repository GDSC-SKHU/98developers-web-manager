import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
@import url('https://fonts.googleapis.com/css2?family=Noto+Sans+KR:wght@300;400;500;700&display=swap');

  * {
        margin: 0;
        padding: 0;
        font-family: 'Noto Sans KR', sans-serif;
    }
    button,
    a {
    all: unset;
    cursor: pointer;
  }
`;

export default GlobalStyle;

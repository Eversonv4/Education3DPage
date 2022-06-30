import { createGlobalStyle } from "styled-components";
import { MyTheme } from "./GlobalTheme";

export const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
  }

  body {
    margin: 0;
    padding: 0;
    font-family: "Open Sans";
    background-color: ${MyTheme.colors.main};
    color: ${MyTheme.colors.secondary};
  }

  a {
    text-decoration: none;
  }
`;

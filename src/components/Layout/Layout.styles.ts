import styled, { createGlobalStyle } from 'styled-components';
import '@fontsource/poppins';

export const GlobalStyles = createGlobalStyle`
  * {
    box-sizing: border-box;
    -moz-box-sizing: border-box;
    margin: 0;
    padding: 0;
  }
  body {
    background-color: #141414;
    color: #fafafa;
    font-family: "Poppins", -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
    "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  }
  html {
    scroll-behavior: smooth;
  }
  button{
    background-color: transparent;
    border: none;
  }
  a {
    text-decoration: none;
  }
  li{
    list-style: none;
  }
`;

export interface ContainerProps {
  mt: number;
}

export const Container = styled.section<ContainerProps>`
  max-width: 1600px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1.5rem;
  margin-top: ${({ mt }) => mt + 'px'};
`;

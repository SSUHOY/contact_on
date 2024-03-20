import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
*{
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
  body {
  margin: 0;
  padding: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100vw;
  height: 100vh;
}

button, select {
    height: 2em;
    background-color: #fff;
    color: #363636;
    border: 1px solid #dbdbdb;
    border-radius: 4px;
    cursor: pointer;
}

button:focus, select:focus {
    outline: none;
}

button {
    display: inline-flex;
    justify-content: center;
    align-items: center;
    padding: .25em .75em;
    text-align: center;
}

select {
    padding: .25em .5em;
}
table {
  width: 100%;
    border-collapse: collapse;
}
th, td {
    padding: 10px;
    text-align: center;
}
a {
  text-decoration: none;
  text-align: center;
  color: black;
  &:hover{
    color: #666666;
  }
}
`;

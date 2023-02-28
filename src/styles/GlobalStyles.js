import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  color: white; 
  text-shadow: 1px 1px 2px black; 
  background: url('./images/background-01.jpg');
  /*,url('./images/background-02.jpg'),url('./images/background-03.jpg'),url('./images/background-04.jpg'),url('./images/background-05.jpg'),url('./images/background-06.jpg')*/
  transition: background-image 1s ease-in-out;
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  /*font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;*/
  font-family: 'rym-regular';
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
@font-face {
  font-family:'rym' ;
  src: url('./font/get_schwifty.ttf');
  font-style:normal ;
  font-weight: normal;
}
@font-face {
  font-family:'rym-regular' ;
  src: url('./font/RockSalt-Regular.ttf');
  font-style:normal ;
  font-weight: normal;
}

@import url('https://fonts.googleapis.com/css2?family=Neucha&display=swap');


/*code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}*/
.App {
  text-align: center;
}
`;


export default GlobalStyles;
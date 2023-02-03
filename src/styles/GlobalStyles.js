import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
body {
  background-image: url('https://www.denofgeek.com/wp-content/uploads/2020/04/Rick-and-Morty-Zoom-Backgrounds-Garage-1.png?fit=1920%2C1080');
  background-attachment: fixed;
  background-size: cover;
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
    'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
    monospace;
}
.App {
  text-align: center;
}
`;


export default GlobalStyles;
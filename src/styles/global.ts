import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  outline: 0;
}

body {
  background: var(--background);
  color: var(--text);
}

border-style, input, textarea, button {
  font: 400 16rem "Inter", sans-serif;
}

button {
  cursor: pointer;
}

a {
  text-decoration: none;
  color: inherit;
}

.container {
  height: 100vh;
  max-width: 992px;
  margin: 0 auto;
  padding: 2.5rem 2rem;

  display: flex;
  flex-direction: column;
}

:root {
  --white: #fff;
  --background: #f2f3f5;
  --gray-line: #dcdde0;
  --text: #666666;
  --text-highlight: #b3b9ff;
  --title: #2e384d;
  --red: #e83f5b;
  --green: #4cd62b;
  --blue: #5965e0;
  --blue-dark: #4953b8;
  --blue-twitter: #2aa9e0;
}

@media(max-width: 1080px) {
  html {
      font-size: 93.75%;
  }
}

@media(max-width: 720px) {
  html {
      font-size: 87.5%;
  }
}

`;

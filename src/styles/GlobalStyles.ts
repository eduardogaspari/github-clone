import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    min-height: 100%;
    background: var(--black);
    overflow-x: hidden;
  }

  *, button, input {
    outline: 0;
    border: 0;
    background: none;
    color: var(--primary);
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  }

  ul {
    list-style: none;
  }

  :root {
    --primary: #fff;
    --black: #0d1117;
    --gray: #586069;
    --gray-light: #6a737d;
    --gray-dark: #24292e;
    --orange: #f9826c;
    --logo: #fff;
    --header: #161b22;
    --username: #8b949e;
    --search: #0d1117;
    --search-placeholder: hsla(0, 0%, 100%, .75);
    --icon: #6a737d;
    --link: #58a6ff;
    --border: #30363d;
    --ticker: rgba(209,213,218, .5);
    
    --calendar-scale-0: transparent;
    --calendar-scale-1: #0e4429;
    --calendar-scale-2: #006d32;
    --calendar-scale-3: #26a641;
    --calendar-scale-4: #26a641;
    --javascript: #f1e05a;
    --typescript: #2b7489;
    --other-language: #8257e5;
  }
`

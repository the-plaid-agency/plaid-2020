import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    color: #444;
    font-family: 'Lato', sans-serif;
    font-size: 1em;
    font-style: normal;
    font-weight: 400;
  }

  body {
    overflow-y: scroll;
  }

  h1 {
    font-size: 5em; /* 80px */
    line-height: 1.25;
  }
  h2 {
    font-size: 3.4375em; /* 55px */
    line-height: 1.25;
  }
  h3 {
    font-size: 2.25em; /* 36px */
    line-height: 1.25;
  }
  h4 {
    font-size: 1.625em; /* 26px */
    line-height: 1.25;
  }
  h5 {
    font-size: 1.125em; /* 18px */
    line-height: 1.25;
  }
  h6 {
    font-size: 0.875em; /* 14px */
    line-height: 1.25;
  }

  a {
    color: #FF671D;
    text-decoration: none;
  }

  p, ol, ul {
    font-size: 1.25em;
    font-weight: 300;
    line-height: 1.5;
  }

  ul {
    list-style-position: inside;
    list-style-type: disc;
  }
  ol {
    list-style-position:  inside;
  }

  code {
    background-color: #ED5429;
    border-radius: 3px;
    color: #fff;
    padding: 5px 3px;
  }

  .gatsby-plugin-transition-link-portal {
    cursor: pointer;
  }
`

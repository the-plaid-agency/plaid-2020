import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  html {
    color: #444;
    font-family: ${props => props.theme.fonts.lato};
    font-size: 1em;
    font-style: normal;
    font-weight: ${props => props.theme.fonts.defaultWeight};
  }

  body {
    background-color: ${props => props.theme.colors.white};
    overflow-y: scroll;
  }

  h1 {
    font-family: ${props => props.theme.fonts.playfairDisplay};
    font-size: ${props => props.theme.fonts.h1Size};
    line-height: 1.25;

  }
  h2 {
    font-family: ${props => props.theme.fonts.playfairDisplay};
    font-size: ${props => props.theme.fonts.h2Size};
    line-height: 1.1818181818;

  }
  h3 {
    font-family: ${props => props.theme.fonts.playfairDisplay};
    font-size: ${props => props.theme.fonts.h3Size};
    line-height: 1.1944444444;

  }
  h4 {
    font-size: ${props => props.theme.fonts.h4Size};
    line-height: 1.2307692308;

  }
  h5 {
    font-size: ${props => props.theme.fonts.h5Size};
    line-height: 1.4444444444;

  }
  h6 {
    font-size: ${props => props.theme.fonts.h6Size};
    font-weight: ${props => props.theme.fonts.bold900};
    letter-spacing: 4px;
    line-height: 2;

    text-transform: uppercase;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  p, ol, ul, address {
    font-size: ${props => props.theme.fonts.defaultSize};
    font-weight: ${props => props.theme.fonts.defaultWeight};
    font-style: ${props => props.theme.fonts.defaultStyle};
    line-height: ${props => props.theme.fonts.defaultLineHeight};
  }

  ul {
    list-style-position: inside;
    list-style-type: disc;
  }
  ol {
    list-style-position:  inside;
  }

  h1, h2, h3, h4, h5, h6,
  p, ol, ul, code {
    margin-bottom: ${props => props.theme.layout.margin};
  }

  code {
    background-color: ${props => props.theme.colors.secondary};
    border-radius: ${props => props.theme.layout.borderRadius};
    color: ${props => props.theme.colors.white};
    padding: ${props => props.theme.layout.padding};
  }

  .gatsby-plugin-transition-link-portal {
    cursor: pointer;
  }
`

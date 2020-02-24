export const theme = {
  colors: {
    primary: 'rgba(255,103,29,1)', // #ff671d
    secondary: 'rgba(68,68,68,1)', // #444
    tertiary: 'rgba(176, 191, 188, 1)', // #b0bfbc
    transparent: 'rgba(0,0,0,0)', // Transparent
    white: 'rgba(255, 255, 255, 1)', // #fff
    black: 'rgba(0, 0, 0, 1)', // #000
  },
  fonts: {
    lato: `'Lato', sans-serif`,
    playfairDisplay: `'Playfair Display', serif`,
    bold: '700',
    bold900: '900',
    defaultLineHeight: '1.75',
    defaultSize: '1em',
    defaultStyle: 'normal',
    defaultWeight: '400',
    h1Size: '5em', // 80px
    h2Size: '3.4375em', // 55px
    h3Size: '2.25em', // 36px
    h4Size: '1.625em', // 26px
    h5Size: '1.125em', // 18px
    h6Size: '0.875em', // 14px
  },
  transitions: {
    default: '0.3s all ease',
    fast: '0.2s all ease',
  },
  layout: {
    borderRadius: '0.3125rem', // 5px
    maxWidth: '90vw',
    maxWidthFixed: '75rem', // 1200px
    maxWidthFixedSmall: '62.5rem', // 1000px
    padding: '1.875rem', // 30px
    paddingBig: '3.75rem', // 60px
    paddingHuge: '5.625rem', // 90px
    paddingGiant: '7.5rem', // 120px
    margin: '1.875rem', // 30px
    marginBig: '3.75rem', // 60px
    marginHuge: '5.625rem', // 90px
    marginGiant: '7.5rem', // 120px
  },
  breakpoints: {
    desktop: 1200,
    wrap: 1000,
    tablet: 960,
    phablet: 600,
    phone: 480
  }
}

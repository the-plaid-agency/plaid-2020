export const theme = {
  colors: {
    primary: 'rgba(255,103,29,1)', // #ff671d
    secondary: 'rgba(68,68,68,1)', // #444
    transparent: 'rgba(0,0,0,0)', // Transparent
    white: 'rgba(255, 255, 255, 1)', // #fff
    black: 'rgba(0, 0, 0, 1)', // #000
  },
  fonts: {
    lato: `'Lato', sans-serif`,
    playfairDisplay: `'Playfair Display', serif`,
    lineHeight: '1.75',
    bold: '700',
    bold900: '900',
    defaultSize: '1em',
    defaultStyle: 'normal',
    defaultWeight: '400',
  },
  transitions: {
    default: '0.3s all ease',
    fast: '0.2s all ease',
  },
  layout: {
    borderRadius: '0.3125rem', // 5px
    maxWidth: '90vw',
    maxWidthFixed: '75rem', // 1200px
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
    tablet: 960,
    phone: 480
  }
}

export const theme = {
  palette: {
    white: '#ffffff',
    black: '#000000'
  },
  fontFamily: {
    montserrat: 'Montserrat'
  },
  transition: {
    hover: 200,
    slide: 300,
    blink: 500,
    spin: 700,
  },
  typography: {
    // H0 - H9
    h0: {
      fontSize: '38px',
      lineHeight: '57px',
      fontWeight: '800'
    },
    h1: {
      fontSize: '42px',
      lineHeight: '54px',
      fontWeight: '600'
    },
    h2: {
      fontSize: '42px',
      lineHeight: '54px',
      fontWeight: '300'
    },
    h3: {
      fontSize: '40px',
      lineHeight: '48px',
      fontWeight: '600'
    },
    h4: {
      fontSize: '32px',
      lineHeight: '39px',
      fontWeight: '700'
    },
    h5: {
      fontSize: '32px',
      lineHeight: '40px',
      fontWeight: '400'
    },
    h6: {
      fontSize: '32px',
      lineHeight: '48px',
      fontWeight: '600'
    },
    h7: {
      fontSize: '32px',
      lineHeight: '48px',
      fontWeight: '300'
    },
    h8: {
      fontSize: '24px',
      lineHeight: '32px',
      fontWeight: '600'
    },
    h9: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: '600'
    },
    // T0 - T8
    t0: {
      fontSize: '20px',
      lineHeight: '28px',
      fontWeight: '400'
    },
    t1: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: '300'
    },
    t2: {
      fontSize: '18px',
      lineHeight: '24px',
      fontWeight: '400'
    },
    t3: {
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '600'
    },
    t4: {
      fontSize: '16px',
      lineHeight: '20px',
      fontWeight: '400'
    },
    t5: {
      fontSize: '16px',
      lineHeight: '24px',
      fontWeight: '400'
    },
    t6: {
      fontSize: '16px',
      lineHeight: '22px',
      fontWeight: '300'
    },
    t7: {
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: '400'
    },
    t8: {
      fontSize: '14px',
      lineHeight: '24px',
      fontWeight: '300'
    },
    t9: {
      fontSize: '10px',
      lineHeight: '16px',
      fontWeight: '300'
    }
  }
}
export type Theme = typeof theme

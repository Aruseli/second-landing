// @flow

import { createMuiTheme } from "@material-ui/core/styles";

export const fontFamily = '"MuseoSansCyrl"';
export const fontMainColor = '#1a1a1a'; //черный
export const fontSecondaryColor = '#f35454'; //красный
export const backgroundColor = '#343147'; //темно-синий
export const buttonColor = '#fff';

const th = createMuiTheme({});
// Create a theme instance.
export const defaultTheme = createMuiTheme({
  palette: {
    primary: {
      main: fontMainColor,
    },
    secondary: {
      main: fontSecondaryColor,
    },
    error: {
      main: '#d15a5a',
    },
    background: {
      default: backgroundColor,
    },
  },
  breakpoints: {
    keys: [
      'xs',
      'sm',
      'lsm',
      'md',
      'lg',
      'xl'
    ],
    values: {
      xs: 0,
      sm: 600,
      lsm: 690,
      md: 960,
      lg: 1280,
      xl: 1920
    }
  },
  typography: {
    fontFamily: fontFamily,
    colorPrimary: {
      color: fontMainColor
    },
    colorSecondary: {
      color: fontSecondaryColor
    },
    h1: {
      textTransform: 'uppercase',
      letterSpacing: '0.07em',
      fontSize: 24,
      fontWeight: 700,
      fontFamily: fontFamily,
      lineHeight: 1.5,
      color: '#fff',
      [th.breakpoints.down('sm')]: {
        color: fontMainColor,
        textTransform: 'none',
        fontWeight: 500,
      },
      '@media(max-width: 340px)': {
        fontSize: 20,
      }
    },
    h2: {
      letterSpacing: '0.05em',
      fontSize: 20,
      fontWeight: 700,
      lineHeight: 1.3,
      fontFamily: fontFamily,
      color: fontMainColor,
    },
    h3: {
      lineHeight: 1.4,
      letterSpacing: '0.07em',
      fontFamily: fontFamily,
      fontWeight: 700,
      fontSize: 18,
      color: fontMainColor,
    },
    h4: {
      fontFamily: fontFamily,
      lineHeight: 1.4,
      fontSize: 16,
      fontWeight: 500,
      color: fontMainColor
    },
    h5: {
      letterSpacing: '0.01em',
      fontSize: 16,
      fontWeight: 500,
      lineHeight: 1.3,
      fontFamily: fontFamily,
      color: '#F37E78' 
    },
    h6: {
      letterSpacing: '0.01em',
      fontSize: 14,
      fontWeight: 300,
      lineHeight: 1.3,
      fontFamily: fontFamily,
      color: fontMainColor 
    },
    subtitle1: {
      lineHeight: 1.4,
      fontFamily: fontFamily,
      fontWeight: 300,
      fontSize: 16,
      color: fontMainColor
    },
    subtitle2: {
      letterSpacing: '0.05em',
      fontSize: 18,
      lineHeight: 1.3,
      color: fontMainColor,
      fontWeight: 300,
    },
    body1: {
      lineHeight: 1.4,
      fontFamily: fontFamily,
      fontSize: 16,
      fontWeight: 300,
      color: fontMainColor,
      [th.breakpoints.up('md')]: {
        lineHeight: 1.5,
      }
    },
    body2: {
      lineHeight: 1.4,
      fontFamily: fontFamily,
      fontSize: 14,
      fontWeight: 500,
      color: fontMainColor
    },
    button: {
      fontFamily: fontFamily
    }
  },
  overrides: {
    MuiButton: {
      contained: {
        backgroundColor: 'transparent', //'#f1c355',
        color: buttonColor,
        boxShadow: '0 0 0 0 #fff',
        '&$disabled': {
          backgroundColor: '#e0ded0',
        },
        '&:hover': {
          boxShadow: '0 15px 5px 0 rgba(0, 0, 0, 0.2)',
          backgroundColor: fontSecondaryColor,
          transition: 'all 1s ease',
        },
        '&:active': {
          boxShadow: '0 0 0 0 #fff !important',
          backgroundColor: fontSecondaryColor,
          transition: 'all 1s ease',
        }
      },
      containedPrimary: {
        color: fontMainColor,
      },
      containedSecondary: {
        '&:hover': {
          backgroundColor: fontSecondaryColor,
          boxShadow: '0 15px 5px 0 rgba(0, 0, 0, 0.2)',
        },
        color: '#fff'
      },
      outlined: {
        border: 'transparent',
        color: fontSecondaryColor,
        fontSize: 16,
        '&:active': {
          backgroundColor: fontSecondaryColor,
          color: fontMainColor,
          transition: 'all 1s ease',
        },
        '&:hover': {
          backgroundColor: fontSecondaryColor,
          color: fontMainColor,
          transition: 'all 1s ease',
        },
      },
      text: {
        fontSize: 16,
        color: fontMainColor,
        '&:active': {
          color: fontSecondaryColor,
          transition: 'all 1s ease',
        },
        '&:hover': {
          color: fontSecondaryColor,
          transition: 'all 1s ease',
        }
      },
      sizeSmall: {
        textTransform: 'none',
        fontSize: 16
      },
      sizeLarge: {
        textTransform: 'none',
        fontSize: 18
      }
    },
    MuiPaper: {
      elevation4: {
        boxShadow: '0 10px 20px 0 rgba(0,0,0,0.1)'
      },
      elevation5: {
        boxShadow: '0 10px 30px 0 rgba(0, 0, 0, .1)',
      },
      rounded: {
        borderRadius: 10
      }
    },
    MuiTypography: {
      gutterBottom: {
        marginBottom: 24
      },
      paragraph: {
        marginBottom: 48
      }
    },
    MuiTouchRipple: {
      root: {
        color: '#fff'
      }
    },
    MuiInput: {
      input: {
        fontSize: 18,
      }
    },
    MuiListItemIcon: {
      root: {
        minWidth: 20
      }
    },
    MuiInputBase: {
      root: {
        color: fontMainColor
      },
        
    },
    MuiFormLabel: {
      root: {
        color: fontMainColor
      }
    },
    MuiOutlinedInput: {
      root: {
        '&$focused fieldset': {
          borderColor: `${fontSecondaryColor} !important`,
          color: '#fff'
        },
      },
      focused: {},
      notchedOutline: {
        borderColor: fontMainColor,
      },
      
    },    
  },
});

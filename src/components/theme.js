// src/theme.js

import { colors } from '@mui/material';


import { createTheme } from '@mui/material/styles';

const theme = createTheme({
  palette: {
    primary: {
      main: '#1976d2',
    },
    secondary: {
      main: '#9e9e9e',
    },
  },
  
  typography: {
    h4: {
      fontWeight: 'bold',
      '@media(max-width:600px)':{
        fontSize:"4vw"
      }
    },
    h5:{
     
      '@media(min-width:800px)':{
         fontSize:"2.5vw"
      },
      // '@media(min-width:600px)':{
      //    fontSize:"3vw"
      // }
      
    },
    fontFamily: ['Open Sans','sans-serif'].join(','),
   
  },

  bgColor:{
    
  },

  breakpoints:{
    values:{
      xs:0,
      sm:600,
      md:960,
      lg:1200,
      xl:1400,
    }
  }


});

export default theme;


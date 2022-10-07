import { createGlobalStyle } from 'styled-components'

import { theme } from './theme'
import './fonts.css'

export const GlobalStyles = createGlobalStyle`
  ::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  ::-webkit-scrollbar-thumb {
    background-color: ${theme.palette.black};
    border-radius: 8px;
  }
 
  ::-webkit-scrollbar-track {
    background-color: transparent;
  }

  @supports(scrollbar-width: thin) {
    * {
      scrollbar-width: thin;
      scrollbar-color: ${theme.palette.white} transparent;
    }
  }

  body {
    font-family: ${theme.fontFamily.montserrat}, sans-serif;
    color: ${theme.palette.white};
    background-color: ${theme.palette.black};

    overflow: hidden;
    overflow-y: auto;

    &.m-show-modal {
      overflow-y: hidden;
    }
  }

  #root {
    display: flex;
    width: 100vw;
    flex-direction: column;
    align-items: center;
    position: relative;
  }

  .blur {
    filter: blur(30px);
  }

  .overflow-hidden{
    overflow: hidden;
  }

  b,
  strong {
    font-weight: 700;
  }
`

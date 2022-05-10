import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
   
   html {
      display: flex;
      justify-content: center;
   }

   body {
      margin: 0;
      width: 100%;
      max-width: 1440px;
   }

   div {
      font-family: 'Montserrat', Helvetica, sans-serif;
      font-weight: 400;
   }
`

export default GlobalStyle

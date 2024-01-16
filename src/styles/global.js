<<<<<<< HEAD
import { createGlobalStyle } from 'styled-components'
import { DEVICE_BREAKPOINTS } from './deviceBreakpoints'

export default createGlobalStyle`
  :root {
    font-size: 16px;

    @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
      font-size: 12px;
    }
  }

=======
import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    background-color: ${({ theme }) => theme.COLORS.GRAY_800};
    color: ${({ theme }) => theme.COLORS.GRAY_100};

    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font-family: 'Roboto', sans-serif;
<<<<<<< HEAD
    font-size: 1rem;
=======
    font-size: 16px;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
    outline: none;
  }

  a {
    text-decoration: none;
  }

  button, a {
    cursor: pointer;
    transition: filter 0.2s;
  }

  button:hover, a:hover {
    filter: brightness(0.9);
  }

  ::-webkit-scrollbar {
<<<<<<< HEAD
    width: .5rem;
=======
    width: 8px;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
  }
  
  ::-webkit-scrollbar-track {
    background-color: #202024;
  }
  
  ::-webkit-scrollbar-thumb {
    background-color: #09090A;
  }
<<<<<<< HEAD
`

=======
`;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

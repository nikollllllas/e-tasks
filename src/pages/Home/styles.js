<<<<<<< HEAD
import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
=======
import styled from "styled-components";
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

export const Container = styled.div`
  width: 100%;
  height: 100vh;

<<<<<<< HEAD
  display: grid;
  grid-template-columns: 280px auto;
  grid-template-rows: auto 1fr;
  grid-template-areas:
    'menu top'
    'menu content';

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    grid-template-columns: auto;
    grid-template-rows: auto 1fr;
    grid-template-areas:
      'top'
      'content';
  }
`

export const FixedContent = styled.section`
  grid-area: top;
`

=======
  display: grid; 
  grid-template-columns: 280px auto; 
  grid-template-rows: auto 1fr; 
  grid-template-areas: 
    "menu top"
    "menu content";
`;

export const FixedContent = styled.section`
  grid-area: top;
`;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

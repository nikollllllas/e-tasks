<<<<<<< HEAD
import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
=======
import styled from "styled-components";
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

export const Container = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin: 0 24px;
  padding: 16px 0;

  border-bottom-width: 1px;
  border-bottom-style: solid;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_500};

  > h1 {
<<<<<<< HEAD
    font-size: 2rem;
  }
`

export const Menu = styled.button`
  background: none;
  border: none;
  display: none;

  > svg {
    font-size: 2.5rem;
    color: ${({ theme }) => theme.COLORS.BLUE_200};
  }

  @media (max-width: ${DEVICE_BREAKPOINTS.MD}) {
    display: block;
  }
`

=======
    font-size: 32px;
  }
`;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

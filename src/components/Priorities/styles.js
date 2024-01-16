<<<<<<< HEAD
import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.section`
  padding: 2rem;
`
=======
import styled from "styled-components";

export const Container = styled.section`
  padding: 32px;
`;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

export const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;

  > h1 {
<<<<<<< HEAD
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
    display: flex;
    align-items: center;
    gap: 0.5rem;
=======
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.RED_200};
    display: flex;
    align-items: center;
    gap: 7px;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
  }

  > small {
    color: ${({ theme }) => theme.COLORS.GRAY_200};
  }
<<<<<<< HEAD
`

export const Tasks = styled.div`
  border: 1px dashed ${({ theme }) => theme.COLORS.RED_200};
  min-height: 9.625rem;
  border-radius: 0.5rem;
  margin-top: 1rem;

  display: flex;
  gap: 1rem;
  padding: 1.5rem;
  flex-wrap: wrap;

  justify-content: center;
  align-items: center;

  @media (min-width: ${DEVICE_BREAKPOINTS.MD}) {
    justify-content: normal;
    align-items: normal;
  }
`

=======
`;

export const Tasks = styled.div`
  border: 1px dashed  ${({ theme }) => theme.COLORS.RED_200};
  min-height: 154px;
  border-radius: 7px;
  margin-top: 16px;

  display: flex;
  gap: 16px;
  padding: 24px;
  flex-wrap: wrap;
`;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

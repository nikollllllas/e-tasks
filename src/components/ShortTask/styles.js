<<<<<<< HEAD
import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'
=======
import styled from 'styled-components';
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
<<<<<<< HEAD
  height: 3.75rem;
  border: 0;
  padding: 0 1rem;
  border-radius: .5rem;
  font-size: 0.87rem;

  display: flex;
  align-items: center;
  gap: .5rem;

  > svg {
    font-size: 1.125rem;
    color: ${({ theme }) => theme.COLORS.RED_200};
  }
`
=======
  height: 44px;
  border: 0;
  padding: 0 16px;
  border-radius: 7px;
  font-size: 14px;
  
  display: flex;
  align-items: center;
  gap: 7px;

  > svg {
    font-size: 18px;
    color: ${({ theme }) => theme.COLORS.RED_200};
  }
`;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

<<<<<<< HEAD
import styled, { css } from 'styled-components'

export const Container = styled.button`
  background: none;
  font-size: 1rem;
=======
import styled, { css } from 'styled-components';

export const Container = styled.button`
  background: none;
  font-size: 16px;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
  border: 0;

  color: ${({ theme }) => theme.COLORS.GRAY_100};

  &:after {
<<<<<<< HEAD
    display: block;
    content: '';
    border-bottom: solid 3px ${({ theme }) => theme.COLORS.BLUE_300};
    transition: all 250ms ease-in-out;
    padding-bottom: 1rem;
    transform: scaleX(0);
  }

  ${({ selected, theme }) =>
    selected &&
    css`
      font-weight: 700;
      &:after {
        transform: scaleX(1);
      }
      color: ${theme.COLORS.BLUE_300};
    `};
`
=======
    display:block;
    content: '';
    border-bottom: solid 3px ${({ theme }) => theme.COLORS.BLUE_300};  
    transition: all 250ms ease-in-out;
    padding-bottom: 16px;
    transform: scaleX(0);
  }

  ${({ selected, theme }) => selected && css`
    font-weight: 700;
    &:after { transform: scaleX(1); }
    color: ${theme.COLORS.BLUE_300}
  `};

`;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

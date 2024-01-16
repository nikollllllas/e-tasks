<<<<<<< HEAD
import styled, { css } from 'styled-components'
=======
import styled, { css } from 'styled-components';
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

export const Container = styled.a`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

<<<<<<< HEAD
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
=======
  height: 72px;
  height: 72px;
  
  padding: 24px 16px;
  border-radius: 7px;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

  display: flex;
  align-items: center;
  gap: 7px;

<<<<<<< HEAD
  ${({ $done }) =>
    $done &&
    css`
      opacity: 0.5;
    `};

  > svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    ${({ $done }) =>
      $done &&
      css`
        color: ${({ theme }) => theme.COLORS.BLUE_300};
      `};
  }
`

export const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;

  > span {
    font-size: .875rem;
    color: ${({ theme }) => theme.COLORS.GRAY_100};
  }

  > small {
    font-size: .75rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`
=======
  ${({ $done }) => $done && css`
    opacity: 0.5;
  `};

  > svg {
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};

    ${({ $done }) => $done && css`
    color: ${({ theme }) => theme.COLORS.BLUE_300};
    `};

  }
`;

export const Details = styled.div`
  display: flex;
  flex: 1;  
  flex-direction: column;

  > span {
    font-size: 14px;
    color: ${({ theme }) => theme.COLORS.GRAY_100};

  }

  > small {
    font-size: 12px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

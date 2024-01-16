<<<<<<< HEAD
import styled from 'styled-components'
=======
import styled from "styled-components";
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
<<<<<<< HEAD

  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};

  border-radius: 0.5rem;

  > input {
    height: 3.5rem;
    width: 100%;
    font-size: 1rem;
    padding: 0.75rem;

=======
  
  background-color: ${({ theme }) => theme.COLORS.GRAY_700};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
  
  border-radius: 7px;
  
  > input {
    height: 56px;
    width: 100%;
    font-size: 16px;
    padding: 12px;
    
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
    color: ${({ theme }) => theme.COLORS.GRAY_100};
    background: transparent;
    border: 0;

    &::placeholder {
      color: ${({ theme }) => theme.COLORS.GRAY_300};
    }
  }
<<<<<<< HEAD

  > svg {
    margin-left: 1rem;
    font-size: 1.5rem;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`
=======
  
  > svg {
    margin-left: 16px;
    font-size: 24px;
    color: ${({ theme }) => theme.COLORS.GRAY_400};
  }
`;
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

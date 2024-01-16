import styled from 'styled-components'
import { DEVICE_BREAKPOINTS } from '../../styles/deviceBreakpoints'

export const Container = styled.button`
  background-color: ${({ theme }) => theme.COLORS.GRAY_600};
  color: ${({ theme }) => theme.COLORS.GRAY_100};
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

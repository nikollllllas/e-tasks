<<<<<<< HEAD
import { Container } from './styles'

export function Filter({ title, selected, ...rest }) {
  return (
    <Container
      type='button'
      selected={selected}
      {...rest}>
      {title}
    </Container>
  )
}
=======
import { Container } from './styles';

export function Filter({ title, selected, ...rest }) {
  return (
    <Container type="button" selected={selected} {...rest}>
      {title}
    </Container>
  )
}
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

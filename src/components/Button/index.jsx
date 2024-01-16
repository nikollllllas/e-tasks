<<<<<<< HEAD
import { Container } from './styles'

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <Container
      type='button'
      {...rest}>
=======
import { Container } from './styles';

export function Button({ icon: Icon, title, ...rest }) {
  return (
    <Container type="button" {...rest}>
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
      {Icon && <Icon />}
      <span>{title}</span>
    </Container>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

<<<<<<< HEAD
import { PushPinSimpleSlash } from '@phosphor-icons/react'

import { Container } from './styles'

export function ShortTask({ title, ...rest }) {
  return (
    <Container
      type='button'
      {...rest}>
=======
import { PushPinSimpleSlash } from "@phosphor-icons/react";

import { Container } from './styles';

export function ShortTask({ title, ...rest }) {
  return (
    <Container type="button" {...rest}>
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
      {title}
      <PushPinSimpleSlash />
    </Container>
  )
<<<<<<< HEAD
}
=======
}
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

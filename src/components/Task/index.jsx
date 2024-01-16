<<<<<<< HEAD
import {
  Circle,
  CheckCircle,
  PushPinSimple,
  PushPinSimpleSlash
} from '@phosphor-icons/react'

import { Container, Details } from './styles'
import { useTheme } from 'styled-components'

export function Task({ data, ...rest }) {
  const { COLORS } = useTheme()

  return (
    <Container
      type='button'
      $done={data.done}
      {...rest}>
=======
import { Circle, CheckCircle, PushPinSimple, PushPinSimpleSlash } from "@phosphor-icons/react";

import { Container, Details } from './styles';
import { useTheme } from "styled-components";

export function Task({ data, ...rest }) {
  const { COLORS } = useTheme();

  return (
    <Container type="button" $done={data.done} {...rest}>
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
      {data.done ? <CheckCircle /> : <Circle />}

      <Details>
        <span>{data.title}</span>
        <small>{data.project}</small>
      </Details>

<<<<<<< HEAD
      {data.priority ? (
        <PushPinSimpleSlash color={COLORS.RED_200} />
      ) : (
        <PushPinSimple color={COLORS.GRAY_400} />
      )}
    </Container>
  )
}
=======
      {
        data.priority
          ? <PushPinSimpleSlash color={COLORS.RED_200} />
          : <PushPinSimple color={COLORS.GRAY_400} />
      }
    </Container>
  )
}
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

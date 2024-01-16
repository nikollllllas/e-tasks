<<<<<<< HEAD
import { List, Plus } from '@phosphor-icons/react'

import { Button } from '../Button'

import { Container, Menu } from './styles'

export function Header({ onOpenMenu }) {
  return (
    <Container>
      <Menu onClick={onOpenMenu}>
        <List />
      </Menu>

      <h1>Tarefas</h1>

      <Button
        icon={Plus}
        title='Nova tarefa'
      />
    </Container>
  )
}

=======
import { Plus } from "@phosphor-icons/react";

import { Button } from "../Button";

import { Container } from "./styles";

export function Header() {
  return (
    <Container>
      <h1>Tarefas</h1>
      <Button icon={Plus} title="Nova tarefa" />
    </Container>
  );
}
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

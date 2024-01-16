<<<<<<< HEAD
import { Fire } from '@phosphor-icons/react'

import { Container, Header, Tasks } from './styles'
import { ShortTask } from '../ShortTask'
import { tasks } from '../../utils/tasks'
=======
import { Fire } from "@phosphor-icons/react";

import { Container, Header, Tasks } from './styles';
import { ShortTask } from "../ShortTask";
import { tasks } from "../../utils/tasks";
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

export function Priorities() {
  return (
    <Container>
      <Header>
        <h1>
          <Fire />
          Prioridades
        </h1>

        <small>2</small>
      </Header>

      <Tasks>
<<<<<<< HEAD
        {tasks
          .filter((task) => task.priority)
          .map((task) => (
            <ShortTask
              key={task.id}
              title={task.title}
            />
          ))}
      </Tasks>
    </Container>
  )
}
=======
        {
          tasks
            .filter((task) => task.priority)
            .map((task) => (
              <ShortTask key={task.id} title={task.title} />
            ))
        }
      </Tasks>
    </Container>
  )
}
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

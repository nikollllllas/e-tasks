<<<<<<< HEAD
import { MagnifyingGlass } from '@phosphor-icons/react'
import { tasks } from '../../utils/tasks'

import { Input } from '../Input'
import { Filter } from '../Filter'

import { Container, Filters } from './styles'

export function Search({ filter, setFilter }) {
  const pending = tasks.filter((task) => !task.done)
  const finished = tasks.filter((task) => task.done)
=======
import { MagnifyingGlass } from "@phosphor-icons/react";
import { tasks } from "../../utils/tasks";

import { Input } from '../Input';
import { Filter } from "../Filter";

import { Container, Filters } from './styles';

export function Search({ filter, setFilter }) {
  const pending = tasks.filter((task) => !task.done);
  const finished = tasks.filter((task) => task.done);
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

  return (
    <Container>
      <Input
        icon={MagnifyingGlass}
<<<<<<< HEAD
        placeholder='Pesquisar tarefa pelo nome...'
=======
        placeholder="Pesquisar tarefa pelo nome..."
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
      />

      <Filters>
        <Filter
          title={`Tudo (${tasks.length})`}
<<<<<<< HEAD
          onClick={() => setFilter('all')}
          selected={filter === 'all'}
=======
          onClick={() => setFilter("all")}
          selected={filter === "all"}
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
        />

        <Filter
          title={`Pendentes (${pending.length})`}
<<<<<<< HEAD
          onClick={() => setFilter('pending')}
          selected={filter === 'pending'}
=======
          onClick={() => setFilter("pending")}
          selected={filter === "pending"}
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23
        />

        <Filter
          title={`Finalizados (${finished.length})`}
<<<<<<< HEAD
          onClick={() => setFilter('finished')}
          selected={filter === 'finished'}
        />
      </Filters>
    </Container>
  )
}
=======
          onClick={() => setFilter("finished")}
          selected={filter === "finished"}
        />
      </Filters>
    </Container>
  );
};
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

<<<<<<< HEAD
import { Task } from '../Task'
import { Container } from './styles'
=======
import { Task } from "../Task";
import { Container } from './styles';
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

export function Tasks({ data }) {
  return (
    <Container>
<<<<<<< HEAD
      {data.map((task) => (
        <Task
          key={task.id}
          data={task}
        />
      ))}
    </Container>
  )
}
=======
      {
        data.map((task) => (
          <Task
            key={task.id}
            data={task}
          />
        ))
      }
    </Container>
  );
};
>>>>>>> 0a054399e9687855df21e6a5aa43a0651d5f2d23

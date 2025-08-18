import { NavLink } from 'react-router-dom';
import TodoWrite from '../components/todos/TodoWrite';

function TodoWriteSection() {
  return (
    <section>
      <div>
        <h2>할 일 작성</h2>
        <NavLink to={`/todos/read`}>목록</NavLink>
        <div>
          <TodoWrite />
        </div>
      </div>
    </section>
  );
}

export default TodoWriteSection;

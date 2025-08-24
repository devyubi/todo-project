import { motion, AnimatePresence } from 'framer-motion';
import TodoItem from './TodoItem';
import { TodoType } from '../../context/todo/todoTypes';
import { useTodos } from '../../context/todo/TodoContext';

type TodoListProps = { todos: TodoType[] };

const TodoList = (): JSX.Element => {
  const { todos } = useTodos();

  return (
    <div className="mt-6">
      <h2 className="text-lg font-semibold text-gray-800 dark:text-gray-100 mb-3">할 일 목록</h2>
      <ul className="space-y-3">
        <AnimatePresence>
          {todos.length > 0 ? (
            todos.map(item => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.25 }}
              >
                <TodoItem todo={item} />
              </motion.li>
            ))
          ) : (
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-gray-500 dark:text-gray-400 text-center"
            >
              할 일을 등록 해 주세요.
            </motion.p>
          )}
        </AnimatePresence>
      </ul>
    </div>
  );
};

export default TodoList;

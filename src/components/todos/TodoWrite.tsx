import { useState } from 'react';
import { TodoType } from '../../context/todo/todoTypes';

type TodoWriteProps = {
  setTodos: React.Dispatch<React.SetStateAction<TodoType[]>>;
  handleTodoUpdate: (newTodo: TodoType) => void;
};

const TodoWrite = ({ handleTodoUpdate }: TodoWriteProps) => {
  const [title, setTitle] = useState<string>('');

  const handleAdd = () => {
    if (title.trim()) {
      const newTodo: TodoType = {
        id: Date.now(),
        title: title,
        completed: false,
      };
      handleTodoUpdate(newTodo);
      setTitle('');
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') handleAdd();
  };

  return (
    <div className="flex gap-2 mt-4">
      <input
        type="text"
        value={title}
        onChange={e => setTitle(e.target.value)}
        onKeyDown={handleKeyDown}
        placeholder="할 일을 입력하세요."
        className="flex-1 rounded-lg border border-gray-300 dark:border-gray-600 
                   px-4 py-2 bg-gray-50 dark:bg-gray-700 text-gray-900 
                   dark:text-gray-100 focus:ring-2 focus:ring-indigo-400 outline-none"
      />
      <button
        onClick={handleAdd}
        className="px-4 py-2 rounded-lg bg-indigo-500 
                   hover:bg-indigo-600 text-white transition shadow-sm"
      >
        등록
      </button>
    </div>
  );
};

export default TodoWrite;

import { useState } from 'react';
import { TodoType } from '../../context/todo/todoTypes';

interface TodoWriteProps {
  onAdd: (todo: TodoType) => void;
}

const TodoWrite: React.FC<TodoWriteProps> = ({ onAdd }) => {
  const [title, setTitle] = useState('');
  const [dueDate, setDueDate] = useState('');

  const handleAdd = () => {
    if (!title.trim()) return;

    const newTodo: TodoType = {
      id: Date.now(),
      title,
      completed: false,
      category: '기본',
      dueDate: dueDate || undefined,
      isFavorite: false,
    };

    onAdd(newTodo);
    setTitle('');
    setDueDate('');
  };

  return (
    <div className="flex gap-2 items-center">
      <input
        type="text"
        placeholder="할 일을 입력하세요"
        value={title}
        onChange={e => setTitle(e.target.value)}
        className="border rounded px-2 py-1 flex-1"
      />
      <input
        type="date"
        value={dueDate}
        onChange={e => setDueDate(e.target.value)}
        className="border rounded px-2 py-1"
      />
      <button onClick={handleAdd} className="bg-orange-400 text-white px-4 py-1 rounded">
        추가
      </button>
    </div>
  );
};

export default TodoWrite;

import { useState } from 'react';
import { TodoType } from '../todos/todoTypes';

type TodoItemProps = {
  todo: TodoType;
  onToggle: (id: number) => void;
  onDelete: (id: number) => void;
  onEdit: (id: number, newTitle: string) => void;
};

const TodoItem: React.FC<TodoItemProps> = ({ todo, onToggle, onDelete, onEdit }) => {
  // Edit 상태인지 아닌지 파악
  const [isEdit, setIsEdit] = useState(false);
  const [editTitle, setEditTitle] = useState(todo.title);

  // 수정 후 값 만 업데이트
  const handleEdit = () => {
    setIsEdit(true);
  };

  // 수정 후 저장
  const handleEditSave = () => {
    if (editTitle.trim()) {
      onEdit(todo.id, editTitle);
      setIsEdit(false);
    }
  };

  // 수정 중인 내용 취소
  const handleEditCancel = () => {
    setIsEdit(false);
  };

  // 키 다운 (Enter 키)
  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleEditSave();
    }
    if (e.key === 'Escape') {
      handleEditCancel();
    }
  };

  return (
    <li>
      {isEdit ? (
        <>
          <input
            type="text"
            value={editTitle}
            onChange={e => setEditTitle(e.target.value)}
            onKeyDown={handleKeyDown}
          />
          <button onClick={handleEditSave}>저장</button>
          <button onClick={handleEditCancel}>취소</button>
        </>
      ) : (
        <>
          <input type="checkbox" onChange={() => onToggle(todo.id)} />
          <span>{todo.title}</span>
          <button onClick={handleEdit}>수정</button>
          <button onClick={() => onDelete(todo.id)}>삭제</button>
        </>
      )}
    </li>
  );
};

export default TodoItem;

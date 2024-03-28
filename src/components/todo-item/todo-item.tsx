import { Trash } from "@phosphor-icons/react";

import { Todo } from "../../types";

import styles from "./todo-item.module.css";

interface TodoItemProps extends Todo {
  onCompleteTodo: (id: string) => void;
  onDeleteTodo: (id: string) => void;
}

export function TodoItem({
  id,
  text,
  isDone,
  onCompleteTodo,
  onDeleteTodo,
}: TodoItemProps) {
  function handleCompleteTodo() {
    onCompleteTodo(id);
  }

  function handleDeleteTodo() {
    onDeleteTodo(id);
  }

  const todoItemClass = isDone
    ? styles.todoItem + " " + styles.isDone
    : styles.todoItem;

  return (
    <li className={todoItemClass}>
      <input
        type="checkbox"
        onChange={handleCompleteTodo}
        checked={isDone}
        aria-label="Clique pata marcar a tarefa"
      />
      {text}
      <button
        onClick={handleDeleteTodo}
        aria-label="Clique para deletar a tarefa"
      >
        <Trash size={20}/>
      </button>
    </li>
  );
}

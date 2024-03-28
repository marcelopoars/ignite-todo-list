import { Badge } from "..";

import { Todo } from "../../types";

import styles from "./todo-list-header.module.css";

interface TodoListHeaderProps {
  todos: Todo[];
}

export function TodoListHeader({ todos }: TodoListHeaderProps) {
  const totalTodos = todos.length;
  const totalDoneTodos = todos.filter(({ isDone }) => isDone === true).length;

  return (
    <div className={styles.todoListHeader}>
      <span>
        Tarefas criadas<Badge>{totalTodos}</Badge>
      </span>
      <span>
        Concluídas
        <Badge>
          {totalTodos > 0 ? `${totalDoneTodos} de ${totalTodos}` : totalTodos}
        </Badge>
      </span>
    </div>
  );
}

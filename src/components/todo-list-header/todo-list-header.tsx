import { ComponentProps } from "react";

import styles from "./todo-list-header.module.css";

type TodoListHeaderProps = ComponentProps<"div">;

export function TodoListHeader(props: TodoListHeaderProps) {
  return <div className={styles.todoListHeader} {...props} />;
}

import { ComponentProps } from "react";

import styles from "./todo-item.module.css";

type TodoItemProps = ComponentProps<"li">;

export function TodoItem(props: TodoItemProps) {
  return <li className={styles.todoItem} {...props} />;
}

import { ComponentProps } from "react";

import styles from "./todo-list-wrapper.module.css";

type TodoListWrapperProps = ComponentProps<"div">;

export function TodoListWrapper(props: TodoListWrapperProps) {
  return <div className={styles.todoListWrapper} {...props} />;
}

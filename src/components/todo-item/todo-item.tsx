import { ComponentProps, ReactNode } from "react";

import styles from "./todo-item.module.css";

type TodoItemProps = ComponentProps<"li"> & {
  isDone?: boolean;
  children: ReactNode;
};

export function TodoItem({ isDone, children }: TodoItemProps) {
  return (
    <li
      className={
        isDone ? styles.todoItem + " " + styles.isDone : styles.todoItem
      }
    >
      {children}
    </li>
  );
}

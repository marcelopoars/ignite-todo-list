import { ComponentProps } from "react";

import styles from "./header.module.css";

type HeaderProps = ComponentProps<"header">;

export function Header(props: HeaderProps) {
  return <header className={styles.header} {...props} />;
}

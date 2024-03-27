import { ComponentProps } from "react";

import styles from './badge.module.css'

type BadgePros = ComponentProps<"span">;

export function Badge(props: BadgePros) {
  return <span className={styles.badge} {...props} />
}

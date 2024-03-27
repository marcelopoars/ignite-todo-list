import { ComponentProps } from "react";

import styles from "./input-wrapper.module.css";

type InputWrapperProps = ComponentProps<"form">;

export function InputWrapper(props: InputWrapperProps) {
  return <form className={styles.inputWrapper} {...props} />;
}

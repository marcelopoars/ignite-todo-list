import todoLogo from '../../../assets/todo-logo.svg'

import styles from './logo.module.css'

export function Logo() {
  return (
    <div className={styles.logo}>
      <img src={todoLogo} alt="Todo logo" />
    </div>
  );
}

import styles from "./empty-list-message.module.css";

import clipboardImage from "../../assets/clipboard.png";

export function EmptyListMessage() {
  return (
    <div className={styles.emptyListMessage}>
      <img src={clipboardImage} alt="Ícone de uma prancheta" />
      <div>
        <strong>Você ainda não tem tarefas cadastradas</strong>
        <p>Crie tarefas e organize seus itens a fazer</p>
      </div>
    </div>
  );
}

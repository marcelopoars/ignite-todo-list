import {
  GithubLogo,
  GoogleChromeLogo,
  LinkedinLogo,
} from "@phosphor-icons/react";
import styles from "./footer.module.css";

export function Footer() {
  return (
    <footer className={styles.footer}>
      <div>
        <p>
          <strong>Ignite | Rocketseat:</strong> Desafio ReactJs
        </p>

        <p>
          Desenvolvido por{" "}
          <a
            href="https://www.marcelopereira.dev/"
            target="_blank"
            rel="noopener noreferrer"
            className=""
          >
            Marcelo Pereira
          </a>
          .
        </p>
      </div>

      <aside>
        <ul>
          <li>
            <a
              href="https://github.com/marcelopoars/ignite-todo-list"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para o repositório Github deste projeto"
            >
              <GithubLogo size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.linkedin.com/in/marcelopoars"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para o perfil Linkedin de Marcelo Pereira"
            >
              <LinkedinLogo size={24} />
            </a>
          </li>
          <li>
            <a
              href="https://www.marcelopereira.dev"
              target="_blank"
              rel="noopener noreferrer"
              title="Ir para o website de Marcelo Pereira"
            >
              <GoogleChromeLogo size={24} />
            </a>
          </li>
        </ul>
      </aside>
    </footer>
  );
}

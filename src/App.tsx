import { ChangeEvent, FormEvent, useState } from "react";

import {
  Header,
  InputWrapper,
  Logo,
  TodoItem,
  TodoListHeader,
  TodoListWrapper,
} from "./components";

import "./styles/global.css";

interface Todo {
  id: string;
  text: string;
}

export function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([
    {
      id: "2024-03-22T16:00:33.640Z",
      text: "Ir no super",
    },
    {
      id: "2024-03-20T10:00:33.640Z",
      text: "Fazer almoço",
    },
  ]);

  function handleNewTodoCHange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleCreateNewTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTodos([
      {
        id: new Date().toISOString(),
        text: newTodo,
      },
      ...todos,
    ]);
  }

  const totalTodos = todos.length 
  const totalDoneTodos = todos.length

  return (
    <>
      <Header>
        <Logo />
        <InputWrapper onSubmit={handleCreateNewTodo}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            aria-placeholder="Adicione uma nova tarefa"
            onChange={handleNewTodoCHange}
          />
          <button type="submit">Criar</button>
        </InputWrapper>
      </Header>

      <main>
        <TodoListHeader>
          <span>Tarefas criadas {totalTodos}</span>
          <span>Concluídas {totalDoneTodos}</span>
        </TodoListHeader>

        <TodoListWrapper>
          {todos.map(({ id, text }) => (
            <TodoItem key={id}>{text}</TodoItem>
          ))}
        </TodoListWrapper>
      </main>
    </>
  );
}

import { ChangeEvent, FormEvent, useState } from "react";

import {
  Badge,
  EmptyListMessage,
  Header,
  InputWrapper,
  Logo,
  TodoItem,
  TodoListHeader,
  TodoListWrapper,
  TrashIcon,
} from "./components";

import "./styles/global.css";

interface Todo {
  id: string;
  text: string;
  isDone: boolean;
}

export function App() {
  const [newTodo, setNewTodo] = useState("");
  const [todos, setTodos] = useState<Todo[]>([]);

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value);
  }

  function handleCreateNewTodo(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();

    setTodos([
      {
        id: new Date().toISOString(),
        text: newTodo,
        isDone: false,
      },
      ...todos,
    ]);

    setNewTodo("");
  }

  function handleDeleteTodo(deletedTodoId: string) {
    const filteredTodos = todos.filter(({ id }) => deletedTodoId !== id);
    setTodos(filteredTodos);
  }

  function handleCompleteTodo(completedTodoId: string) {
    const deletedTodo = todos.find(({ id }) => id === completedTodoId);

    if (!deletedTodo) return;

    const filteredTodos = todos.filter(({ id }) => completedTodoId !== id);

    const sortedTodos = [
      { ...deletedTodo, isDone: !deletedTodo.isDone },
      ...filteredTodos,
    ].sort((a, b) => Date.parse(b.id) - Date.parse(a.id));

    setTodos(sortedTodos);
  }

  const totalTodos = todos.length;
  const totalDoneTodos = todos.filter(({ isDone }) => isDone === true).length;

  return (
    <>
      <Header>
        <Logo />
        <InputWrapper onSubmit={handleCreateNewTodo}>
          <input
            type="text"
            placeholder="Adicione uma nova tarefa"
            aria-placeholder="Adicione uma nova tarefa"
            value={newTodo}
            onChange={handleNewTodoChange}
          />
          <button type="submit">Criar</button>
        </InputWrapper>
      </Header>

      <main>
        <TodoListHeader>
          <span>
            Tarefas criadas<Badge>{totalTodos}</Badge>
          </span>
          <span>
            Concluídas
            <Badge>
              {totalDoneTodos} de {totalTodos}
            </Badge>
          </span>
        </TodoListHeader>

        <TodoListWrapper>
          {totalTodos === 0 ? (
            <EmptyListMessage />
          ) : (
            <>
              {todos.map(({ id, text, isDone }) => (
                <TodoItem key={id} isDone={isDone}>
                  <input
                    type="checkbox"
                    onChange={() => handleCompleteTodo(id)}
                    checked={isDone}
                    aria-label="Clique pata marcar a tarefa"
                  />
                  {text}
                  <button
                    onClick={() => handleDeleteTodo(id)}
                    aria-label="Clique para deletar a tarefa"
                  >
                    <TrashIcon />
                  </button>
                </TodoItem>
              ))}
            </>
          )}
        </TodoListWrapper>
      </main>
    </>
  );
}

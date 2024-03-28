import { ChangeEvent, FormEvent, useState } from "react";

import {
  EmptyListMessage,
  Header,
  InputWrapper,
  Logo,
  PlusIcon,
  TodoItem,
  TodoListHeader,
  TodoListWrapper,
  TrashIcon,
} from "./components";

import { Todo } from "./types";

import "./styles/global.css";

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
          <button type="submit" disabled={!newTodo}>
            Criar
            <PlusIcon />
          </button>
        </InputWrapper>
      </Header>

      <main>
        <TodoListHeader todos={todos} />

        <TodoListWrapper>
          {todos.length === 0 ? (
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

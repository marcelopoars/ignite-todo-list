import { ChangeEvent, FormEvent, useState } from "react";

import {
  EmptyListMessage,
  Footer,
  Header,
  InputWrapper,
  Logo,
  TodoItem,
  TodoListHeader,
  TodoListWrapper,
} from "./components";

import { Todo } from "./types";

import "./styles/global.css";
import { PlusCircle } from "@phosphor-icons/react";

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

  function completeTodo(completedTodoId: string) {
    const completedTodo = todos.find(({ id }) => id === completedTodoId);

    if (!completedTodo) return;

    const filteredTodos = todos.filter(({ id }) => completedTodoId !== id);

    const sortedTodos = [
      { ...completedTodo, isDone: !completedTodo.isDone },
      ...filteredTodos,
    ].sort((a, b) => Date.parse(b.id) - Date.parse(a.id));

    setTodos(sortedTodos);
  }

  function deleteTodo(deletedTodoId: string) {
    const filteredTodos = todos.filter(({ id }) => deletedTodoId !== id);
    setTodos(filteredTodos);
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
            <PlusCircle size={20} weight="bold" />
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
              {todos.map((todo) => (
                <TodoItem
                  key={todo.id}
                  onCompleteTodo={completeTodo}
                  onDeleteTodo={deleteTodo}
                  {...todo}
                />
              ))}
            </>
          )}
        </TodoListWrapper>
      </main>
      
      <Footer />
    </>
  );
}

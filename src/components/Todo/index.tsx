import { TodoProvider } from "../../context/TodoProvider"
import { PendingTodos } from "./PendingTodos"
import { TodoList } from "./TodoList"

const Todo = () => {
  return (
    <TodoProvider>
        <h1>Todos: <PendingTodos /></h1>
        <TodoList />
    </TodoProvider>
  )
}

export default Todo
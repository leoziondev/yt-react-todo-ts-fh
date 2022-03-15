import { TodoProvider } from "../../context/TodoProvider"
import { TodoList } from "./TodoList"

const Todo = () => {
  return (
    <TodoProvider>
        <h1>Todos</h1>
        <TodoList />
    </TodoProvider>
  )
}

export default Todo
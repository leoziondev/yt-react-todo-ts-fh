import { useTodos } from "../../hooks/useTodos"

export const PendingTodos = () => {
    const { pendingTodos } = useTodos()

  return (
    <span>{pendingTodos}</span>
  )
}

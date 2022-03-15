import { useTodos } from '../../hooks/useTodos'
import { Todo } from '../../interfaces/interfaces'

import styles from './TodoItem.module.css'

interface Props {
    todo: Todo
}

export const TodoItem = ({ todo }: Props) => {
    const { toggleTodo } = useTodos()

    return (
        <li
            onClick={ () => toggleTodo(todo.id) }
            className={styles.li}
            style={{
                textDecoration: todo.completed ? 'line-Through' : '',
                backgroundColor: todo.completed ? '#14b8a6' : ''
            }}
        >
            {todo.desc}
        </li>
    )
}

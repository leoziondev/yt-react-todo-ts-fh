import React, { useContext } from 'react'
import { TodoContext } from '../../context/TodoContext'
import { Todo } from '../../interfaces/interfaces'

import styles from './TodoItem.module.css'

interface Props {
    todo: Todo
}

export const TodoItem = ({ todo }: Props) => {
    const { toggleTodo } = useContext(TodoContext)

    const handleClick = () => {
        toggleTodo(todo.id)
    }

    return (
        <li
            onClick={ handleClick }
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

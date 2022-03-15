import React from 'react'
import { Todo } from '../../interfaces/interfaces'

import styles from './TodoItem.module.css'

interface Props {
    todo: Todo
}

export const TodoItem = ({ todo }: Props) => {

    const handleClick = () => {
        console.log("handleClick: ", todo.desc)
    }

    return (
        <li
            onDoubleClick={ handleClick }
            className={styles.li}
        >
            {todo.desc}
        </li>
    )
}

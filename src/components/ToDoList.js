import React, {useEffect, useState} from 'react'
import {ToDoItem} from './ToDoItem'
import s from './todoList.module.css'


export const ToDoList = (props) => {
    let [todos, changeTodos] = useState([])
    useEffect(() => {
        changeTodos(props.todos)
    }, [props.todos])

    let todosCount = 3


    return <>
        <div className={s.container}>
        {todos.map(t => {
            if (t.id <= todosCount) {
                return <ToDoItem updateTodo={props.updateTodo} todo={t}/>
            }
            })
        }
        <div className={s.button}>i0S</div>
    </div>
</>}

import React from 'react'
import s from './todoList.module.css'


export const ToDoItem = (props) => {
    let todo = props.todo
    let toggleTodos = (todo) => {
        props.updateTodo(todo)
    }

    return <div>
        <div className={s.checkbox}>
            <input id={todo.id} className={s.checkbox_input} type="checkbox" onClick={(e) => {
                toggleTodos(todo)
            }}/>
            <label className={todo.completed ? [s.checkbox_label, s.active].join(' ') : s.checkbox_label} htmlFor={todo.id}>
                <div>{todo.title}</div>
            </label>
            <div className={s.todoDescription}>{todo.title}</div>
        </div>
    </div>
}

// no-optimized paginator
//<div>
// {pages.map(m => {
//   return <span style={{marginLeft: 20 + 'px'}} onClick={() => props.changeActivePage(m)}>{m}</span>
//  })}
//</div>
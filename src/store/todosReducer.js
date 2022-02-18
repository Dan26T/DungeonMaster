import {toDoApi} from "../api/api";


const SET_TODOS = 'SET_TODOS'
const CHANGE_PAGE = 'CHANGE_PAGE'
const TOGGLE_TODO = 'TOGGLE_TODO'


let initialState = {
    todos: []
};


const TodosReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_TODOS:
            return {
                ...state,
                todos: [...action.todos]
            }
        case CHANGE_PAGE:
            return {
                ...state,
                activePage: action.page
            }
        case TOGGLE_TODO:
            return {
                ...state,
                todos: state.todos.map(todo => {
                    if (todo.id === action.todoId) {
                        let completedNew = !todo.completed
                        return {...todo, completed: completedNew}
                    }
                    return todo;
                })
            };


        default:
            return state;
    }
}

const setToDosAC = (todos) => ({type: SET_TODOS, todos})
const toggleTodoAC = (todoId) => ({type: TOGGLE_TODO, todoId})
export const changeActivePageAC = (page) => ({type: CHANGE_PAGE, page})


export const getTodos = () => {
    return async (dispatch) => {
        let response = await toDoApi.getToDos()
        dispatch(setToDosAC(response))
    }
}
export const updateTodo = (todo) => {
    if (todo.completed) return async (dispatch) => {
            let response = await toDoApi.uncompleteToDos(todo)
            dispatch(toggleTodoAC(todo.id))
        }
    else return async (dispatch) => {
            let response = await toDoApi.completeToDos(todo)
            dispatch(toggleTodoAC(todo.id))
        }
}

export default TodosReducer;
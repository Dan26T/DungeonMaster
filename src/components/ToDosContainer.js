import React from 'react'
import {ToDoList} from './ToDoList'
import {connect} from 'react-redux';
import {getTodos, updateTodo} from '../store/todosReducer'
import {compose} from "redux";




class ToDosContainer extends React.Component {

    componentDidMount() {
        this.props.getTodos()
    }

    render() {
        return <>
            <ToDoList todos={this.props.todo} updateTodo={this.props.updateTodo} />
            </>
    }
}


let mapStateToProps = (state)=> ({
    todo: state.todosPage.todos,
    })

export default compose(
    connect(mapStateToProps, {getTodos, updateTodo}),
)(ToDosContainer);
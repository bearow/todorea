import { connect } from 'react-redux';
import TaskList from './components/TaskList';
import TodoTask from './components/TodoTask';
import { addTodo, toggleTodo } from './TodoActions';

export const TodoList = connect(
    function mapStateToProps(state) {
        return { todos: state };
    },
    function mapDispatchToProps(dispatch) {
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id))
        };
    }
)(TaskList)
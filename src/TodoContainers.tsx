import { connect } from 'react-redux';
import TaskList from './components/TaskList';
import { addTodo, toggleTodo } from './TodoActions';

export const TodoList = connect(
    function mapStateToProps(state) {
        return { todos: state };
    },
    function mapDispatchToProps(dispatch) {
        console.log('huhu');
        return {
            addTodo: text => dispatch(addTodo(text)),
            toggleTodo: id => dispatch(toggleTodo(id))
        };
    }
)(TaskList)
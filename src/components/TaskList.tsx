import * as React from 'react';
import TodoTask from './TodoTask';

const TaskList = function TodoList(props) {
    const { todos, toggleTodo, addTodo } = props;
    const onSubmit = (e) => {
        const text = e.target.value;
        const isEnterPressed = (e.which == 13);
        const isEmpty = text.length <= 0;

        if(isEnterPressed && !isEmpty) {
            addTodo(text);
            e.target.value = '';       
        }
    };

    const toggleClick = id => () => toggleTodo(id);

    return (
        <div className='todo'>
            <input 
                type='text' 
                className='todo__entry'
                placeholder='add todo' 
                onKeyDown={onSubmit} 
            />
            <ul className='todo__list'>
                {todos.map(task => (
                    <li 
                    key={task.id} 
                    className='todo__item' 
                    onClick={toggleClick(task.id)}>
                    <TodoTask task={task} />
                </li>
                ))}
            </ul>
        </div>
    );
}

export default TaskList;
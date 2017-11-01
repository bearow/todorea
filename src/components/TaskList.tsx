import * as React from 'react';
import TodoTask from './TodoTask';

const TaskList = function TodoList(props) {
    const { todos, toggleTodo, addTodo } = props;
    const onSubmit = (e) => {
        const input = e.target;
        const text = input.value;
        const isEnterPressed = (e.which == 13);
        const isEmpty = text.length <= 0;

        if(isEnterPressed && !isEmpty) {
            input.value = '';
            addTodo(text);
        }
        console.log(todos);        
    };

    const toggleClick = id => e => toggleTodo(id);

    return (
        <div className='todo'>
            <div>
            <input 
                type='text' 
                className='todo__entry'
                placeholder='add todo' 
                onKeyDown={onSubmit} 
            />
            </div>
            <div className='ugh'>
            <ul className='todo__list'>
                {todos.map(task => (
                <li 
                    key={task.id} 
                    onClick={toggleClick(task.id)}>
                    <TodoTask task={task} />
                </li>
            ))}
            </ul>
            </div>
        </div>
    );
}

export default TaskList;
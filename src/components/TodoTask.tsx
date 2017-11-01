import * as React from 'react';

const TodoTask = function TodoTask({ task }) {
    return (
    <span>
        {task.text}
    </span>);
}

export default TodoTask;
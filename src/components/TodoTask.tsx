import * as React from 'react';

const TodoTask = function TodoTask({ task }) {
    if(task.isDone) {
        return (
            <div className='done'>
                {task.text}
            </div>
        );
    }
    return (
        <div>
            {task.text}
        </div>
    )
}

export default TodoTask;
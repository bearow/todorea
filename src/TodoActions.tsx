let id = 0;

export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            id: id++,
            isDone: false,
            text
        }
    };
}

export function toggleTodo(id) {
    return {
        type: 'TOGGLE_TODO',
        payload: {
            id
        }
    }
}
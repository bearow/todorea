export function addTodo(text) {
    return {
        type: 'ADD_TODO',
        payload: {
            id: Math.floor(Math.random() * 1000).toString(),
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
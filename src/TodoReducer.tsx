export default function TodoReducer(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO': {
            let newState = state.slice();
            newState.push(action.payload);
            return newState;
        }
        case 'TOGGLE_TODO': {
            return state.map(task => {
                if(task.id === action.payload.id) {
                    task.isDone = !task.isDone;
                }
                    return task;
            });
        }
        default: {
            return state;
        }
    }
}
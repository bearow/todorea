export default function(state = [], action) {
    switch(action.type) {
        case 'ADD_TODO': {
            state.push(action.payload);
            return state;
        }
        case 'TOGGLE_TODO': {
            return state.map(task => {
                if(task.id === action.payload.id) {
                    let isDone = task.isDone;
                    task.isDone = !isDone;
                    return task;
                } else {
                    return task;
                }
            })
        }
        default: {
            return state;
        }
    }
}
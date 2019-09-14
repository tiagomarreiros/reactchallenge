const taskReducer = (state = { tasks: [] }, action) => {
    switch(action.type){
        case 'ADD':
            const { task } = action.payload
                return { 
                    ...state,
                    tasks: [...state.tasks, {name: task, completed: false}]
                } 
            // console.log('payload task', action.payload)
            //const task = action.payload.task;
            
            //let newState = Object.assign({}, state, {task})
            //let newState = tasks: [task, ...state.tasks]
            //console.log([...state, {done: false}])
            //console.log('newstate', newState);
            // return [...state, {done: false}]
            //return newState
            
         default: return state   
    }
}

export default taskReducer;
const taskReducer = (state = { tasks: [] }, action) => {
    console.log('payload',action)
    
    switch(action.type){
        case 'ADD':
            const { task, id } = action.payload
                return { 
                    tasks: [{id: id, name: task, completed: false}, ...state.tasks]
                } 
            // console.log('payload task', action.payload)
            //const task = action.payload.task;
            
            //let newState = Object.assign({}, state, {task})
            //let newState = tasks: [task, ...state.tasks]
            //console.log([...state, {done: false}])
            //console.log('newstate', newState);
            // return [...state, {done: false}]
            //return newState
        case 'TOGGLE':
                console.log('reducer state',state.tasks, action.payload.id )
                return {
                    tasks: state.tasks.map( task =>
                    
                       
                            task.id === action.payload.id ?  { ...task, completed: !task.completed}  : task
                            // task.id === action.payload.id ? { ...task, completed: !task.completed } : task
                            
                    
                    ) 
                }  

         default: return state   
    }
}

export default taskReducer;
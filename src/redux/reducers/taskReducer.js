const taskReducer = (state = { tasks: [], edit: null }, action) => {
    console.log('payload',action)
    
    switch(action.type){
        case 'ADD':
            const { task, id } = action.payload
                return { 
                    tasks: [{id: id, name: task, completed: false}, ...state.tasks],
                    edit: {}
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
        case 'DELETE':
             return {
                tasks: state.tasks.filter( task => task.id !== action.payload.id)
             }  

        case 'EDIT':
            return{ 
                tasks: state.tasks,
                edit: {id: action.payload.id, name: action.payload.name}
                }
        case 'UPDATE':
            return{
                tasks: state.tasks.map( task =>                  
                       
                    task.id === action.payload.id ?  { ...task, name: action.payload.text}  : task
                )
            }        


         default: return state   
    }
}

export default taskReducer;
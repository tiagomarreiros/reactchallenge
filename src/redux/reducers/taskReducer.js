const taskReducer = (state = { tasks: [], edit: {id: 0, name: ''} }, action) => {
    console.log('payload',action)
    const Immutable = require('immutable');
    switch(action.type){
        case 'ADD':
            const { task, id } = action.payload
            const taskList = [{id: id, name: task, completed: false}, ...state.tasks]
                return { 
                    //tasks: Immutable.List(taskList),
                    //edit: Immutable.Map({})
                    tasks: [{id: id, name: task, completed: false}, ...state.tasks],
                    edit: {}
                    
                } 
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
                ),
                edit:{}
            }        


         default: return state   
    }
}

export default taskReducer;
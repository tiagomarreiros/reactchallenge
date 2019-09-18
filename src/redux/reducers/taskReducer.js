
//const Immutable = require('immutable');

//WITH IMMUTABLE JS ----------------------INCOMPLETED!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!!

 /* const tasksInitialState = Immutable.fromJS({
    tasks: [],
    edit: {id: 0, name: ''}
})

const testImmutable = (state = tasksInitialState, action) => {
    //const { id } = action.payload 
    switch(action.type){
        case 'ADD':  
            return state.tasks.push(Immutable.fromJS(action.payload))
        case 'TOGGLE':
            return state.tasks.map( task =>                                        
                task.id === action.payload.id ?  task.set('completed', true) : task)
        case 'DELETE':
            return state.tasks.filter( task => task.id !== action.payload.id)
        case 'EDIT':
             state.tasks.findIndex((task)=> task.get('id') === action.payload.id); 
             return state.tasks.setIn([0, 'text'], action.text);
        case 'UPDATE':
            return state.tasks.updateIn(
                state.tasks.findIndex(
                    (task) => { return task.get('id') === action.payload.id}
                ), 
                (task) => {
                    return task.set('text', action.payload.text )
                } )
        default:
            return state                    
    }
} */
 

/**********************************************************************************************************************/

// WITHOUT IMMUTABLE JS
const taskReducer = (state = { tasks: [], edit: {id: 0, name: ''} }, action) => {

    switch(action.type){

        case 'FETCH_TASKS':
            console.log('action.payload.tasks', action.payload)
            const tasks = action.payload
            const newState = Object.assign({}, state, {tasks})

            console.log('newState', newState)

            return newState
        case 'ADD':
            const { task, id } = action.payload          
            
                return { 
                    tasks: [{id: id, name: task, completed: false}, ...state.tasks], 
                    edit: {}   
                    
                    
                } 
        case 'TOGGLE':
                return {
                    tasks: state.tasks.map( task =>
                                          
                            task.id === action.payload.id ?  { ...task, completed: !task.completed}  : task
                                                                         
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
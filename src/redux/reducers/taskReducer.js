
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
const taskReducer = (state = { tasks: [], edit: {id: 0, taskState: 'INCOMPLETE', description: ''}, loading: false }, action) => {
    console.log('action.payload', action.payload)

    switch(action.type){

        case 'FETCH_TASKS':
            const tasks = action.payload
            const newState = Object.assign({}, state, {tasks, loading: false})

            return newState
            
        case 'ADD':
            const description = action.payload
            const newStateTask = Object.assign({}, state, {tasks: [description, ...state.tasks], loading: false} )

                return newStateTask

        case 'TOGGLE':
                const tasksMapToggle = state.tasks.map( task =>                                        
                    task.id === action.payload.id ?  { ...task, state: action.payload.state}  : task                                                               
                    )
                const newToogle = Object.assign({}, state, {tasks:tasksMapToggle, loading: false} )
                return newToogle
                
               
        case 'DELETE':
                const deleteState = Object.assign({}, state, {tasks: state.tasks.filter( task => task.id !== action.payload.id), loading: false })
             return deleteState

        case 'EDIT':
            return{ 
                tasks: state.tasks,
                edit: {id: action.payload.id, taskState: action.payload.taskState, description: action.payload.description},
                loading: false
                }
        case 'UPDATE':
            return{
                tasks: state.tasks.map( task =>
                                          
                    task.id === action.payload.id ?  { ...task, state: action.payload.state, description: action.payload.description}  : task
                                                                 
            ),
                edit:{},
                loading: false
            }        
        case 'LOADING':
                const newLoading = Object.assign({}, state, {tasks: [...state.tasks], loading: true} )
                console.log('loading', newLoading)
            return newLoading
                
               

         default: return state   
    }
} 

export default taskReducer;
let taskId = 0
const myHeaders= {
    'Accept': 'application/json',
    "Content-Type" : "application/json",
    //'Access-Control-Allow-Credentials': 'true',
    //'Access-Control-Allow-Origin': 'http://localhost:3001/',
    //'Access-Control-Allow-Methods': 'GET,PUT,POST,PATCH,DELETE, OPTIONS'
}
const url = 'http://localhost:3000/todos'
const url2 = 'http://localhost:3000/todo'

export const getAllTasks = (filter, orderBy) => {
    return (dispatch) => {
        fetch(`${url}?filter=${filter}&orderBy=${orderBy}`, 
                {
                    method: 'GET', 
                    mode: 'cors',
                    //headers: myHeaders
                }
            )
            .then(res => res.json())
            .then(tasks => {
                dispatch({
                    type: "FETCH_TASKS",
                    payload: tasks || {}
                
                })
            })      
    }
}

export const putTasks = (description) => {
    return (dispatch) => {
        fetch(`${url}`, 
                {
                    method: 'PUT', 
                    mode: 'cors',
                    //headers: myHeaders,
                    body: JSON.stringify({description: description})
                }
            )
            .then(res => res.json())
            .then((description) => {
                console.log('description', description)
                dispatch({
                    type: "ADD",
                    payload: description
                
                })
            })      
    }
}

export const deleteTask = id => {
    return (dispatch) => {
        fetch(`${url2}/${id}`, 
                {
                    method: 'DELETE', 
                    mode: 'cors',
                    //headers: myHeaders,
                }
            )
            .then(res => res.json())
            .then((id) => {
                console.log('id', id)
                dispatch({
                    type: 'DELETE',
                    payload: {
                        id
                    }
                
                })
            })      
    }
}

export const toggleTask = (id, stateTask) =>  {
    return (dispatch) => {
        fetch(`${url2}/${id}`, 
                {
                    method: 'PATCH', 
                    mode: 'cors',
                    //headers: myHeaders,
                    body: JSON.stringify({state: stateTask})
                }
            )
            .then(res => res.json())
            .then((id) => {
                console.log('id', id)
                dispatch({
                        type: 'TOGGLE',
                        payload: {
                            id
                        }               
                    })
            })      
    }
}
    




export const addTask = (task) => ({
    type: 'ADD',
    payload: {
        task,
        id: taskId++
    }
})





export const editTask = (id, name) => ({
    type: 'EDIT',
    payload: {
        id,
        name,
    }
})

export const updateTask = (id, text) => ({
    type: 'UPDATE',
    payload: {
        id,
        text
    }
})

export const setVisibilityFilter = filter => ({
    type: 'SET_VISIBILITY_FILTER',
    filter
  })

export const VisibilityFilters = {
    SHOW_ALL: 'SHOW_ALL',
    SHOW_COMPLETED: 'SHOW_COMPLETED',
  }

  export const setSortList = (sort) =>({
      type: 'SET_SORT_FILTER',
      payload: {
          sort
      }
  })

export const sortFilters = {
    SORT_ASC: 'SORT_ASC',
    SORT_DESC: 'SORT_DESC',
    SORT_ID: 'SORT_ID'
}
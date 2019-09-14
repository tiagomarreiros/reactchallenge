let taskId = 0

export const addTask = (task) => ({
    type: 'ADD',
    payload: {
        task,
        id: taskId++
    }
})

export const toggleTask = id => ({
    type: 'TOGGLE',
    payload: {
        id
    }
  })

export const deleteTask = id => ({
    type: 'DELETE',
    payload: {
        id
    }
})

export const editTask = (id, name) => ({
    type: 'EDIT',
    payload: {
        id,
        name,
    }
})


  export const hideCompleted = () => ({
      type: 'HIDE'
  })
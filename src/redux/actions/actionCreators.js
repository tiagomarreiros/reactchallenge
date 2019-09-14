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
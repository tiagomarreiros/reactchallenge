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
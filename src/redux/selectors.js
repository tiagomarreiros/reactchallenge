import { createSelector } from 'reselect'
import { sortFilters } from '../redux/actions/actionCreators';
import { VisibilityFilters } from '../redux/actions/actionCreators';

const getVisibilityFilter = (state) => state.visibilityFilter
const getTasks = (state) => state.tasks
const getSortFilter = (state) => state.sortFilter


export const getVisibleTasks = createSelector(
    [ getVisibilityFilter, getTasks ],
    (visibilityFilter, tasks) => {
      switch (visibilityFilter) {
        case VisibilityFilters.SHOW_ALL:
          return tasks
        case VisibilityFilters.SHOW_COMPLETED:
          return {tasks: tasks.tasks.filter(tasks => !tasks.completed)}
        default:
          throw new Error('Unknown filter: ' + getVisibilityFilter)
        
      }
    }
  )
  
  export const getSortList = createSelector(
    [getSortFilter, getTasks],
    (sortFilter, tasks) => {
      console.log('soooort',sortFilters)
      switch(sortFilter){
        case sortFilters.SORT_ID:
          return {
            tasks: tasks.tasks.sort((a, b) => 
                                    (a.id < b.id) ? 1 : -1
                                    )}
          
        case sortFilters.SORT_ASC:
          console.log('SORT ASC CASE')
          return { 
            tasks: tasks.tasks.sort((a, b) => 
                                    (a.name > b.name) ? 1 : -1
                                    )}
        case sortFilters.SORT_DESC:
          return { 
            tasks: tasks.tasks.sort((a, b) => 
                                (a.name > b.name) ? 1 : -1).reverse()
                              }    
         default:
            throw new Error('Unknown filter: ' + getSortFilter)
      }
    }
  ) 
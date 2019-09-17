import { sortFilters } from '../actions/actionCreators';

const sortReducer = (state = sortFilters.SORT_ID, action) => {
  switch (action.type) {
    case 'SET_SORT_FILTER':
      return action.payload.sort
    default:
      return state
  }
}

export default sortReducer
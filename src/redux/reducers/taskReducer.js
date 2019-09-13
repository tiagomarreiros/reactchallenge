const itemReducer = (state = { items: [] }, action) => {
    switch(action.type){
        case 'ADD':
            const item = action.payload.item;
            let newAll = []
            //let newState = Object.assign({}, state, {items})
            let newState = newAll.push(item)
            console.log('newstate', newState);
            return newState;
         default: return state   
    }
}

export default itemReducer;
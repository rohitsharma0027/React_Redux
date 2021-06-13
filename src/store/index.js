import {createStore} from 'redux';

// Step 2: Create the reducer function
const counterReducer = (state = {counter:0, showCounter:true},action) => {
    if(action.type === 'increment')
    {
        return {counter : state.counter+1}
    }

    if(action.type === 'increase')
    {
        return {counter : state.counter+action.amount}
    }

    if(action.type === 'decrement')
    {
        return {counter : state.counter-1}
    }

    return state
};


// Step 1: create store 
// Step 3: Pass the reducer function to the store
const store = createStore(counterReducer)

export default store;
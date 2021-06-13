import {createStore} from 'redux';

const initialState = { counter:0, showCounter:true }


// Step 2: Create the reducer function
const counterReducer = (state = initialState,action) => {
    if(action.type === 'increment')
    {
        return {
            counter : state.counter+1,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'increase')
    {
        return{
            counter : state.counter+action.amount,
            showCounter: state.showCounter
        }
    }

    if(action.type === 'decrement')
    {
        return{
            counter : state.counter-1,
            showCounter: state.showCounter
        }
    }

    if(action.type === "toggle")
    {
        return{
            showCounter: !state.showCounter,
            counter: state.counter
        }
    }

    return state
};


// Step 1: create store 
// Step 3: Pass the reducer function to the store
const store = createStore(counterReducer)

export default store;
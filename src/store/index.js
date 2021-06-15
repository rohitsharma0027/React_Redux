import {createStore} from 'redux';

// initial state object
const initialState = { counter:0, showCounter:true }

// UNique indentifier to keep application simple while the app grows
export const INCREMENT = 'increment';
export const DECREMENT = 'decrement';
export const INCREASE  = 'increase';

// Step 2: Create the reducer function
const counterReducer = (state = initialState,action) => {
    if(action.type === INCREMENT)
    {
        return {
            counter : state.counter+1,
            showCounter: state.showCounter
        }
    }

    if(action.type === INCREASE)
    {
        return{
            counter : state.counter+action.amount,
            showCounter: state.showCounter
        }
    }

    if(action.type === DECREMENT)
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
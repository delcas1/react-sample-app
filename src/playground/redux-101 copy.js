import { createStore } from 'redux';

// Action generators - functions that return action objects
//Actions is what we use to communicate with the stores
//also Actions are nothing more than an object and the object can be so basic so as to have just one property type

const incrementCount = ({ incrementBy = 1 } = {}) => ({
    type: 'INCREMENT',
    incrementBy
});

const decrementCount = ({ decrementBy = 1 } = {}) => ({
    type: 'DECREMENT',
    decrementBy
});

const setCount = ({ count }) => ({
    type: 'SET',
    count
});

const resetCount = () => {
    return ({
        type: 'RESET'
    });
};

// Reducers
// 1. Reducers are pure functions - similar to the concept of local variables vs global variables and fields. A pure functions
// only contains local variables inside the function. 
// 2. Never change state or actiton

const countReducer = (state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            return {
                count: state.count + action.incrementBy
            };
        case 'DECREMENT':
            return {
                count: state.count - action.decrementBy
            };
        case 'SET':
            return {
                count: action.count
            };
        case 'RESET':
            return {
                count: 0
            };
        default:
            return state;
    }
};

const store = createStore(countReducer);

const unsubscribe = store.subscribe(() => {
    console.log(store.getState());
});

//Dispatchers get actions delivered to the store

store.dispatch(incrementCount({ incrementBy: 5 }))

//Unsubscribe here causes everything else to be ignored
//unsubscribe();

store.dispatch(incrementCount());

store.dispatch(resetCount());

store.dispatch(decrementCount());

store.dispatch(decrementCount({ decrementBy: 10 }));

store.dispatch(setCount({ count: -100 }));
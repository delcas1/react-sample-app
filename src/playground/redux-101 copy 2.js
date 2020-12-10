import { createStore } from 'redux';

const store = createStore((state = { count: 0 }, action) => {
    switch (action.type) {
        case 'INCREMENT':
            const incrementBy = typeof action.incrementBy === 'number' ? action.incrementBy : 1;
            return {
                count: state.count + incrementBy
            }
        case 'DECREMENT':
            return {
                count: state.count - 1
            }
        case 'RESET':
            return {
                count: state.count = 0
            };
        case 'SET':
            return {
                counr: action.count
            };
        default:
            return state;
    }
});



//Once we have a store, we can change what's in it by way of Actions
//Actions are nothing more than JS Objects that get sent to the store
//They describe the things that can happen to the store
//Analogy of a human: actions = walk, run, site, work, etc

//WATCH FOR CHANGES TO THE STORE

store.subscribe(() => {
    console.log(store.getState());
});

//Unsubsribe pretty much does what you'd expect
//const unsubsribe = store.subscribe(() => {
//console.log(store.getState());
//})


//So after subscribing to a state, we're sending for Dispatcher events, passing 4 actions to the store, making 4 changes to it...

store.dispatch({
    type: 'INCREMENT',
    incrementBy: 5
});

store.dispatch({
    type: 'INCREMENT'
});

store.dispatch({
    type: 'RESET'
});

store.dispatch({
    type: 'DECREMENT'
});

store.dispatch({
    type: 'SET',
    count: 4
});
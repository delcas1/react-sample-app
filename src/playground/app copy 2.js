import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';

const store = configureStore();

store.dispatch(addExpense({ description: 'Water bill' }));
store.dispatch(addExpense({ description: 'Gas bill' }));

//both expenses have the word bill, they shuld show up
store.dispatch(setTextFilter('bill'));

//if we pass water, only one should bw kept
//store.dispatch(setTextFilter('Water'));


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//Provider allows us to provide or make available store, to all
//the components that make up our application - super usefull, no 
//need to individually pass comps aroud
//this here is all it takes to setup the store provider
//AND: since all of the components now have access to the store
//we can take advantage of the CONNECT function of Redux
const jsx = (
    <Provider store={store}>
        <AppRouter />
    </Provider>
);
//

//console.log(store.getState());
ReactDOM.render(jsx, document.getElementById('app'));
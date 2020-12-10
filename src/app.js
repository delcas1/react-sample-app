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

store.dispatch(addExpense({ description: 'Water bill', amount: 4500 }));
store.dispatch(addExpense({ description: 'Gas bill', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Rent bill', amount: 109500 }));
store.dispatch(addExpense({ description: '123abcs', amount: 109500 }));

//both expenses have the word bill, they shuld show up
//store.dispatch(setTextFilter('water'));

/* setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000);   */
 
const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//Provider allows us to provide or make available store, to all
//the components that make up our application - super usefull, no 
//need to individually pass comps aroud
//this here is all it takes to setup the store provider
//AND: since all of the components now have access to the store
//we can take advantage of the CONNECT function of Redux
// STEP 1 - create PROVIDER
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
    
);


ReactDOM.render(jsx, document.getElementById('app'));
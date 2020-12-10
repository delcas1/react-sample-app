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

store.dispatch(addExpense({ description: 'Oiler' }));
store.dispatch(addExpense({ description: 'Lamp' }));
store.dispatch(addExpense({ description: 'AEM' }));
store.dispatch(addExpense({ description: 'water' }));
store.dispatch(addExpense({ description: 'aem' }));
//store.dispatch(setTextFilter('war'));
//store.dispatch(setTextFilter('bill'));
//store.dispatch(setTextFilter('aem'));


//simulate change of state, ui will show 
/* setTimeout(() => {
    store.dispatch(setTextFilter('serg'));
}, 3000); */


const state = store.getState();
const visibleExpenses = getVisibleExpenses(state.expenses, state.filters);
console.log(visibleExpenses);

//reduc provider will allow us to provide the store to all of the compoment that make up
//our app globally, which means that we don't have to individually render/add components where 
//they might be needed
const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
    
);


ReactDOM.render(jsx, document.getElementById('app'));
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import AppRouter from './routers/AppRouter';
import configureStore from './store/configureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import './styles/styles.scss';
import './firebase/firebase';
import './playground/promises'

const store = configureStore();

store.dispatch(addExpense({ description: 'AEN', amount: 4500 }));
store.dispatch(addExpense({ description: 'React', createdAt: 1000 }));
store.dispatch(addExpense({ description: 'Linux', amount: 109500 }));

//both expenses have the word bill, they shuld show up
//store.dispatch(setTextFilter('water'));

/* setTimeout(() => {
    store.dispatch(setTextFilter('bill'));
}, 3000);  */
 
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

/* import React from 'react';
import ReactDOM from 'react-dom';

console.log('app.js is running');


var userName = 'Taylor';


var template = (
    <div>
        <h1>{userName}</h1>
        <h2>{userName + '!'}</h2>
        <p>age</p>
        <p>location</p>
    </div>
);

var appRoot = document.getElementById('app');




ReactDOM.render(template,appRoot); */
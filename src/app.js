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

const jsx = (
    <Provider store={store}>
    <AppRouter />
    </Provider>
    
);

console.log('hello');

ReactDOM.render(jsx, document.getElementById('app'));
import React from 'react';
import { connect } from 'react-redux';
import ExpenseListItem from './ExpenseListItem';
import selectExpenses from '../selectors/expenses';

// SUPER IMPORTANT When we connect a component to the Redux store, it's Reacted, which means as the store changes, 
//the component will get re-rendered with those values - no need to subsribe or anything like that
//so this very simple presentational component patterns os HOW WE WANT OUR COMPONENTS TO BE *****
//STEP 2: Create HOC 

const ExpenseList = (props) => (
    <div>
    <h1>Testing</h1>
    {props.expenses.map((expense) => {
      return <ExpenseListItem key={expense.id} {...expense} />
    })}
    </div>
  );


const mapStateToProps = (state) => {
  return {
    expenses: selectExpenses(state.expenses, state.filters )
  };
};

// we call connect define the thngs that we want to get from the store
//and we define the component that we want to create the connected version off
//the end result is a brand new component wcich is just our component with the props from the store

export default connect(mapStateToProps)(ExpenseList);
  



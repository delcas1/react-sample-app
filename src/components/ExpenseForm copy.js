import React from 'react';
//import { SingleDatePicker } from 'react-dates';
import moment from 'moment';



export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);
  
  this.state = {
    description: props.expense ? props.expense.description : '',
    note: props.expense ? props.expense.note : '',
    amount: props.expense ? (props.expense.amount / 100).toString() : '',
    createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
    calendarFocused: false,
    error: ''
   };
  }

    onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
    onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };

    onAmountChange = (e) => {
    const amount = e.target.value;
    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    };
    
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt })); 
    } else {
      console.log('no date registered');
    }
    };

  onFocusChange = ({ focused }) => {
  this.setState(() => ({ focused }))

};
onSubmit = (e) => {
    e.preventDefault();
    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
  }
    
  };
 
  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.onSubmit}>
          <input
            type="text"
             placeholder="Description"
            autoFocus
            value={this.state.description}
            onChange={this.onDescriptionChange}
          />
          <input
            type="text"
             placeholder="Amount"
            value={this.state.amount}
            onChange={this.onAmountChange}
          />
 
        <input 
          type="date" 
          value={this.state.createdAt}
          min="2018-01-01" max="2018-12-31" 
          onChange={this.onDateChange}
          focused={this.state.DateInput_input__focused}/>

          <textarea
          placeholder="Add a note for your expense (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}>
        
        </textarea>
        <button> Add Expense</button>
        </form>
      </div>
    )
  }
  }
















/* 

import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';

export default class ExpenseForm extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      description: props.expense ? props.expense.description : '',
      note: props.expense ? props.expense.note : '',
      amount: props.expense ? (props.expense.amount / 100).toString() : '',
      createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
      calendarFocused: false,
      error: ''
    };
  }
  onDescriptionChange = (e) => {
    const description = e.target.value;
    this.setState(() => ({ description }));
  };
  onNoteChange = (e) => {
    const note = e.target.value;
    this.setState(() => ({ note }));
  };
  onAmountChange = (e) => {
    const amount = e.target.value;

    if (!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)) {
      this.setState(() => ({ amount }));
    }
  };
  onDateChange = (createdAt) => {
    if (createdAt) {
      this.setState(() => ({ createdAt }));
    }
  };
  onFocusChange = ({ focused }) => {
    this.setState(() => ({ calendarFocused: focused }));
  };
  onSubmit = (e) => {
    e.preventDefault();

    if (!this.state.description || !this.state.amount) {
      this.setState(() => ({ error: 'Please provide description and amount.' }));
    } else {
      this.setState(() => ({ error: '' }));
      this.props.onSubmit({
        description: this.state.description,
        amount: parseFloat(this.state.amount, 10) * 100,
        createdAt: this.state.createdAt.valueOf(),
        note: this.state.note
      });
    }
  };
  render() {
    return (
      <form className="form" onSubmit={this.onSubmit}>
        {this.state.error && <p className="form__error">{this.state.error}</p>}
        <input
          type="text"
          placeholder="Description"
          autoFocus
          className="text-input"
          value={this.state.description}
          onChange={this.onDescriptionChange}
        />
        <input
          type="text"
          placeholder="Amount"
          className="text-input"
          value={this.state.amount}
          onChange={this.onAmountChange}
        />
        <SingleDatePicker
          date={this.state.createdAt}
          onDateChange={this.onDateChange}
          focused={this.state.calendarFocused}
          onFocusChange={this.onFocusChange}
          numberOfMonths={1}
          isOutsideRange={() => false}
        />
        <textarea
          placeholder="Add a note for your expense (optional)"
          className="textarea"
          value={this.state.note}
          onChange={this.onNoteChange}
        >
        </textarea>
        <div>
          <button className="button">Save Expense</button>
        </div>
      </form>
    )
  }
} */

// Higher Order Component (HOC) - A component (HOC) that renders another component
// Reuse code
// Render hijacking
// Prop manipulation
// Abstract state

import React from 'react';
import ReactDOM from 'react-dom';

const Info = (props) => (
  <div>
    <h1>A Page</h1>
    <p>Component you can see if signed in: {props.info}</p>
  </div>
);

const withAdminWarning = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAdmin && <p>This is private info. Please don't share!</p>}
      <WrappedComponent {...props} />
    </div>
  );
};

// hide or show the component based on Auth
//arrow function returns the HOC,  jsx implicit
//core functionality: look in props.isAuthenticated - if true show the WrappedComponent, if false
//show a different message
//if it is true, render one thing, if false render something else - ternary logic
const requireAuthentication = (WrappedComponent) => {
  return (props) => (
    <div>
      {props.isAuthenticated ? (
        <WrappedComponent {...props} />) : (<p>Please login to view your stuff</p>)}
    </div>
  );
};

const AdminInfo = withAdminWarning(Info);
const AuthInfo = requireAuthentication(Info);

ReactDOM.render(<AdminInfo isAdmin={false} info="There are the details" />, document.getElementById('app'));
//ReactDOM.render(<AuthInfo isAuthenticated={true} info="I am logged in" />, document.getElementById('app'));

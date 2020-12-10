import React from 'react';
import { NavLink } from 'react-router-dom';

//Navlink component better 
const Header = () => (
  <header>      
       <div>
        <h1>Test-React-App</h1>
        <NavLink to="/"activeClassName="is-active" exact={true}>Dashboard</NavLink>
        <NavLink to="/create" activeClassName="is-active">Create CRUD</NavLink>
      {/*   <NavLink to="/edit" activeClassName="is-active">Edit Expense</NavLink> */}
        <NavLink to="/help" activeClassName="is-active">Help</NavLink>
      </div>
      
  </header>    
);
export default Header;

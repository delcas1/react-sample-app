import React from 'react';
import { BrowserRouter, Route, Switch, Link, NavLink } from 'react-router-dom';
import ExpenseDashboardPage from '../components/ExpenseDashboardPage';
import AddExpensePage from '../components/AddExpensePage';
import EditExpensePage from '../components/EditExpensePage';
import NotFoundPage from '../components/NotFoundPage';
import Header from '../components/Header';
import HelpPage from '../components/HelpPage';
import HomePage from '../components/HomePage';
import LogoutPage from '../components/LogoutPage';
import ChangePasswordPage from '../components/ChangePasswordPage';


const AppRouter = () => (
    <BrowserRouter>
    <div>
    <Header />    
    <Switch>
        <Route path="/" component={ExpenseDashboardPage} exact={true} />
        <Route path="/create" component={AddExpensePage} />

        <Route path="/edit/:id" component={EditExpensePage} />
        <Route path="/help" component={HelpPage} />
        
        {/* To make pages dynamic, the path variable can read a value with forward:id, and 
        that id can map to anything, like fetch something being requested from a databse
        such as permissions, or history, anything passed om query params, etc.In other words, there
        are many options for making pages re-direct to anywhere, inside or outside of AEM
         */}

        <Route path="/home" component={HomePage} />
        <Route path="/change" component={ChangePasswordPage} />
        <Route path="/logout" component={LogoutPage} />

        <Route component={NotFoundPage} />
    </Switch>    
    </div>
       
    </BrowserRouter>
  );

export default AppRouter;


/* const ChangePasswordPage = () => (
    <div>
        Change Your ChangePasswordPage
    </div>
);

const LogoutLink = () => (
    <div>
        This is from a different Page 
    </div>
);

const EditProfilePage = () => (
    <div>
        Edit Profile page
    </div>
);

const Settings = () => (
    <div>
        Settings
    </div>
);

const ChangePasswordPage = () => (
    <div>
        Change Your ChangePasswordPage
    </div>
);

const LogoutLink = () => (
    <div>
        This is from a different Page 
    </div>
);

const EditProfilePage = () => (
    <div>
        Edit Profile page
    </div>
);

const Settings = () => (
    <div>
        Settings
    </div>
); */



//Client side routing

/* 
const routes = ( 
    <BrowserRouter>
    <div>
    <Header />    
    <Switch>
        <Route path="/" component={ChangePasswordPage} exact={true} />
        <Route path="/create" component={LogoutLink} />
        <Route path="/help" component={Settings} exact={true} />
        <Route path="/edit" component={EditProfilePage} />
        <Route component={NotFoundPage} />
    </Switch>    
    </div>
       
    </BrowserRouter>
); */
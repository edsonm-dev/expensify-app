import React from 'react';
import HelpPage from '../components/HelpPage'
import {createBrowserHistory} from 'history'

import AddExpensePage from '../components/AddExpensePage'
import EditExpensePage from '../components/EditExpensePage'
import NotFoundPage from '../components/NotFoundPage'
import ExpenseDashboardPage from '../components/ExpenseDashboardPage'
import LoginPage from '../components/LoginPage'
import {Router, Route, Switch} from 'react-router-dom'
import PrivateRoute from './PrivateRoute'

export const history =createBrowserHistory()

const AppRouter = () =>(
    <Router history={history}>
    <div>
    
    <Switch>
        <Route path="/" component={LoginPage} exact={true}/>
        <PrivateRoute path="/dashboard" component={ExpenseDashboardPage} />
        <PrivateRoute path="/create" component={AddExpensePage} />
        <Route path="/help" component={HelpPage} />
        <PrivateRoute path="/edit:id" component={EditExpensePage} /> 
        <Route component={NotFoundPage} />
    </Switch>
    </div>

</Router>)

export default AppRouter;

import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import AuthenticatedRoute from './AuthenticatedRoute'
import LoginComponent from './LoginComponent'
import HeaderComponent from './HeaderComponent'
import ListTodosComponent from './ListTodosComponent'
import FooterComponent from './FooterComponent'
import WelcomeComponent from './WelcomeComponent'
import LogoutComponent from './LogoutComponent'
import ErrorComponent from './ErrorComponent'
import TodoComponent from './TodoComponent'

class TodoApp extends Component {
    render() {
        return (
            <div className="todoApp">
                <Router>
                    <>
                        <HeaderComponent></HeaderComponent>
                        <Switch>
                            <Route path="/" exact component={LoginComponent} />
                            <Route path="/login" component={LoginComponent} />
                            <AuthenticatedRoute path="/todos/:id" component={TodoComponent} />
                            <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                            <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                            <AuthenticatedRoute path="/logout" component={LogoutComponent} />


                            <Route component={ErrorComponent} />
                        </Switch>
                        <FooterComponent></FooterComponent>
                    </>
                </Router>

            </div>
        )
    }

}

export default TodoApp
import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import DeleteTodo from "./components/delete-todo.component";
import TodosList from "./components/todos-list.component";
import Header from "./components/header";
import HeaderNav from "./components/headerNav";
import Login from "./components/login";
import SignUpPage from "./components/SignUpPage";
import Dashboard from "./dashboard";
import './App.css';
import Protected from './components/Protected';
import Logout from './components/Signout';


class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <HeaderNav/>
        
         
          
          
<Switch>
                <Protected path="/" exact component={Dashboard} />
                
                <Route path="/login" component={Login} />
                <Route path="/signup" component={SignUpPage} />
                <Protected path='/signout' component={Logout}/>
                
                </Switch>

          
        </div>
      </Router>
    );
  }
}

export default App;
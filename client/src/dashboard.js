import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import CreateTodo from "./components/create-todo.component";
import EditTodo from "./components/edit-todo.component";
import DeleteTodo from "./components/delete-todo.component";
import TodosList from "./components/todos-list.component";
import Header from "./components/header";
import './App.css';

export default class Dashboard extends Component {
    render() {
        return (
            <Router>
            <div className="container-fluid  bg-danger">
              <h1 className="todo-heading pt-3">
              TO-DO LIST
              </h1>
              <div className="row">
                <div className="col-lg-4 col-md-2"></div>
                <div className="col-lg-4 col-md-8 col-sm-12 col-xs-12 col-12">
                  <div className="header">
                  <Header title="new task" link1="Todos" link2 = "ADD"></Header>
                  </div>
                <div className="todo-content">
    
                    <Route path="/" exact component={TodosList} />
                    <Route path="/edit/:id" component={EditTodo} />
                    <Route path="/delete/:id" component={DeleteTodo} />
                    <Route path="/create" component={CreateTodo} />
                </div>
    
    
    
                </div>
                <div className="col-lg-4 col-md-2"></div>
              </div>
    
              
            </div>
          </Router>
        )
    }
}

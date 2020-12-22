import React, {Component} from 'react';
import { Link } from 'react-router-dom';
// import * as todos from '../apis/todos'
import { connect } from 'react-redux';
import { getAllTodos} from '../actions/dataActions';
import {Table} from 'react-bootstrap';

const Todo = props => (
    <tr>
        <td className={props.todo.todo_completed ? 'completed textLimit' : 'textLimit'}> <Link to={"/delete/"+props.todo._id} ><i class="fas text-danger pr-1 fa-trash"></i></Link>{props.todo.todo_description}</td>
       
        <td className="text-right">
            <Link to={"/edit/"+props.todo._id} ><i class="fas text-success fa-edit"></i></Link>
        </td>
    </tr>
)

class TodosList extends Component {

    constructor(props) {
        super(props);
        this.state = {todos: []};
    }

    componentDidMount() {
        this.props.getAllTodos().then(data=> {
            this.setState({todos: data.todos});
        })  
        // this.props.getAllTodos().then(data=> {
        //     console.log("data: ",data);
        //     this.setState({todos: data.todos});
        // })
        // todos.getAll().then(data=> {
        //     this.setState({todos: data});
        // })
    }

    // componentDidUpdate() {
    //     this.props.getAllTodos().then(data=> {
    //         this.setState({todos: data.todos});
    //     })  
    // }

    todoList() {
        return this.state.todos.map((currentTodo, i) => {
            console.log("todos: ",currentTodo)
            return <Todo todo={currentTodo} key={i} />;
        });
    }

    render() {
        return (
            <div className="bg-light">
                <div className="pl-4 pr-4">
                
                
                <table className="table " style={{ marginTop: 20 }}>
                    
                    <tbody className="border-bottom   border-secondary">
                        { this.state.todos.length ? this.todoList(): <p className = "defaultTextStyle" >No todos added yet</p> }
                    </tbody>
                </table>
                </div>
            </div>
        )
    }
}
/* We can also get data of todos from reducer */
// const mapStateToProps = (state) => {
//     return{
//         todos:state.dataReducer.todos
//     }   
// }
const mapDispatchToProps = (dispatch) =>({
    getAllTodos: () => dispatch(getAllTodos())
})
export default connect(undefined, mapDispatchToProps)(TodosList)
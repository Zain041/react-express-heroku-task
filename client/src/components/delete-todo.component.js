import React, {Component} from 'react';
import { connect } from 'react-redux';
import { getTodoWithId,updateTodo,deleteTodoWithId} from '../actions/dataActions';
class EditTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
      
        this.onChangeTodoCompleted = this.onChangeTodoCompleted.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
           
            todo_completed: false
        }
    }

    componentDidMount() {
        /* match.params.id is using from react-router-v4 matching id in url */
        this.props.getTodoWithId(this.props.match.params.id)
            .then(response => {
                console.log("response: ",response);
                this.setState({
                    todo_description: response.todo.todo_description,
                  
                    todo_completed: response.todo.todo_completed
                })
            })
            .catch((error) =>{
                console.log("error while getting todo: ",error)
            })
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

    

    onChangeTodoCompleted(e) {
        this.setState({
            todo_completed: !this.state.todo_completed
        });
    }
    deleteTodo(){
        this.props.deleteTodoWithId(this.props.match.params.id)
        .then(res => {
            console.log(res.data);
            if(res){
                alert("Todo has been deleted successfully!")
                this.props.history.push('/')
            } else {
                alert("Server error while deleting todo");
            }
        });
    }

    onSubmit(e) {
        e.preventDefault();
        const todoToUpdate = {
            todo_description: this.state.todo_description,
           
            todo_completed: this.state.todo_completed
        };
        this.props.updateTodo(this.props.match.params.id,todoToUpdate)
        .then(res => {
            console.log(res.data);
            if(res){
                alert("Todo has been updated successfully!")
                this.props.history.push('/')
            } else {
                alert("Server error while updating todo");
            }
        });
    }

    render() {
        return (
            <div className="bg-light">
                <div className="m-3 pt-3 pb-3">
                <h3>Delete Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                   
                   
                       
                        
                        <div className="form-check">
                            <input  type="checkbox"
                                    className="form-check-input"
                                    id="completedCheckbox"
                                    name="completedCheckbox"
                                    onChange={this.onChangeTodoCompleted}
                                    checked={this.state.todo_completed}
                                    value={this.state.todo_completed}
                                    />
                            <label className="form-check-label" htmlFor="completedCheckbox">
                                Completed
                            </label>
                        </div>
                        <br/>
                        <div className="form-group">
                           
                            <input type="button" onClick={this.deleteTodo.bind(this)} value="Delete Todo" className="btn btn-danger marginHorizontal" />
                            <button className="btn btn-primary"> Cancel</button>
                        </div>
                    
                </form>
                </div>
            </div>
        )
    }
}

// const mapStateToProps = (state) => {
//     return{
//         todos:state.dataReducer.todos
//     }   
// }
const mapDispatchToProps = (dispatch) =>({
    updateTodo: (id,todoToUpdate) => dispatch(updateTodo(id,todoToUpdate)),
    getTodoWithId: (id) => dispatch(getTodoWithId(id)),
    deleteTodoWithId: (id) => dispatch(deleteTodoWithId(id))
})
export default connect(undefined, mapDispatchToProps)(EditTodo)
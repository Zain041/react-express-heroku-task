import React, {Component} from 'react';
import * as todos from '../apis/todos'
import { connect } from 'react-redux';
import { addTodo} from '../actions/dataActions';
class CreateTodo extends Component {

    constructor(props) {
        super(props);

        this.onChangeTodoDescription = this.onChangeTodoDescription.bind(this);
       
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            todo_description: '',
          
            todo_completed: false
        }
    }

    onChangeTodoDescription(e) {
        this.setState({
            todo_description: e.target.value
        });
    }

   

    onSubmit(e) {
        e.preventDefault();

        console.log(`Form submitted:`);
        console.log(`Todo Description: ${this.state.todo_description}`);
       
        console.log(`Todo Completed: ${this.state.todo_completed}`);

        const newTodo = {
            todo_description: this.state.todo_description,
         
            todo_completed: this.state.todo_completed
        }
        this.props.addTodo(newTodo).then(res=> {
            console.log("res: ",res);
            this.setState({
                todo_description: '',
               
                todo_completed: false
            })
            if(res){
                alert("Todo has been added successfully!");
                
            } else {
                alert("Server error while adding todo");
            }
        })
    }

    render() {
        return (
            <div className="bg-light" style={{marginTop: 20}}>
                <div className="m-3 mt-3 mb-3">
                <h3>Create New Todo</h3>
                <form onSubmit={this.onSubmit}>
                    <div className="form-group">
                        <label>Description: </label>
                        <input  type="text"
                                className="form-control"
                                value={this.state.todo_description}
                                onChange={this.onChangeTodoDescription}
                                />
                    </div>
                   
                    
                        
                       
                    
                    <div className="form-group">
                        <input type="submit" value="Create Todo" className="btn btn-primary" />
                    </div>
                </form>
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return{
        todos:state.dataReducer.todos
    }   
  }
const mapDispatchToProps = (dispatch) =>({
    addTodo: (newTodo) => dispatch(addTodo(newTodo))
})
export default connect(mapStateToProps, mapDispatchToProps)(CreateTodo)
import React from "react";
import { connect } from 'react-redux'
import { addTodo } from '../redux/actions'
class AddTodo extends React.Component {
    constructor(props){
        super(props)
        this.state = { input :"" }
    }

    updateInput = input => {
        this.setState({input})
    }

    handleAddTodo = () => {
       this.props.addTodo(this.state.input);
       this.setState({input:''})
       // sets state back to string
    }

    render(){
        return(
            <div>
                <input value={this.state.input} onChange={e =>{this.updateInput(e.target.value)}}  />
                <button className="add-todo" onClick={this.handleAddTodo} >Add Todo</button>
            </div>            
        )
    }
}

export default connect(
    null,
    { addTodo }
  )(AddTodo)
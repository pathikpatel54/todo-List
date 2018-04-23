import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { AddTodo, ClearTodo, DeleteTodo, UpTodo, DownTodo } from "../actions/index";

class ToDoInput extends Component {
  constructor(props) {
    super(props);

    this.state = {
      todo: "",
    }

    this.onAddClick = this.onAddClick.bind(this);
    this.onClearClick = this.onClearClick.bind(this);
  }

  renderList() {
    return this.props.list.map((item, index, list) => {
      return (
        <li className="list-group-item d-flex align-items-center" key={index}>
          <span className="oi oi-chevron-top"
          onClick={(event) => {if(index!=0){this.props.UpTodo(index)}}}></span>
          <span className="oi oi-chevron-bottom"
          onClick={(event) => {if(index!=list.length - 1){this.props.DownTodo(index)}}}></span>
          <span className="ml-auto">
            {item}
          </span>
          <button className="btn btn-link ml-auto" type="button" onClick={event => this.props.DeleteTodo(index)}>Delete</button>
        </li>
      );
    });
  }

  onAddClick(event){
    if(this.state.todo !=  ""){
      this.props.AddTodo(this.state.todo);
      this.state.todo = "";
    }
  }

  onClearClick(event){
    this.props.ClearTodo();
  }

  render() {
    return (
      <div>
      <div className="input-group mb-3">
        <input type="text" className="form-control" placeholder="Enter Item"
          onChange={event => this.setState({ todo: event.target.value })}
          value={this.state.todo} />
          <div className="input-group-append">
            <button className="btn btn-outline-secondary" type="button" 
            onClick={this.onAddClick}>Add Item</button>
            <button className="btn btn-outline-secondary" type="button" 
            onClick={this.onClearClick}>Clear</button>
          </div>
      </div>
      <ul className="list-group"> {this.renderList()}</ul>
      </div>
    )
  }
}

function mapStatesToProps(state) {
  return {
          list: state.list
  };
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ AddTodo , ClearTodo, DeleteTodo, UpTodo, DownTodo }, dispatch);
}

export default connect(mapStatesToProps, mapDispatchToProps)(ToDoInput);
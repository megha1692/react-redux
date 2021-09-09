import React from "react";
import { connect } from "react-redux";
import TodoList from "./TodoList";
import Header from "./Header";
import { addTodo, deleteTodo } from "../actions";

class App extends React.Component {
  onChange = ({ target }) => {
    this.setState({ [target.name]: target.value });
  };

  onClickAdd = () => {
    let id = Math.floor(Math.random());
    this.props.addTodo({ id, ...this.state });
  };

  onDeleteTodo = (id) => {
    this.props.deleteTodo(id);
  };

  render() {
    const todos  = this.props.todos;
    return (
      <>
        <Header />
        <div className="app">
          <div className="container">
            <div className="row">
              <div className="col-xs-8">
                <TodoList
                  todos={todos}
                  onDeleteTodo={(id) => this.onDeleteTodo(id)}
                />
              </div>
              <div className="col-xs-4">
              <div className="add-todo">
                <input
                  className="form-control"
                  onChange={(e) => this.onChange(e)}
                  name="title"
                  id="title"
                  type="text"
                  placeholder="Add items"
                />
                <button className="btn btn-primary" onClick={() => this.onClickAdd()}>
                  Add Todo
                </button>
              </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
  }
}

const mapStateToProps = (state) => {
  return {
    todos: state.todos,
  };
};

export default connect(mapStateToProps, { addTodo, deleteTodo })(App);

import React, { Component } from "react";

class TodoList extends Component {
  constructor() {
    super();
    this.state = {
      userInput: "",
      items: []
    };
  }

  onChange(event) {
    this.setState({
      userInput: event.target.value
    });
  }

  addToDo(event) {
    event.preventDefault();
    this.setState(
      {
        userInput: "",
        items: [...this.state.items, this.state.userInput]
      },
      () => console.log(this.state)
    );
  }

  deleteTodo(event) {
    event.preventDefault();
    var target = event.target;
    var parent = target.parentNode;
    var Item = parent.firstChild.nodeValue;
    var indexActuel = this.state.items.indexOf(Item);
    var newtab = this.state.items;

    newtab.splice(indexActuel, 1);
    this.setState({
      items: newtab
    });
  }

  renderTodos() {
    return this.state.items.map(item => {
      return (
        <ul key={item}>
          <li>
            {item} |<button onClick={this.deleteTodo.bind(this)}>X</button>
          </li>
        </ul>
      );
    });
  }

  render() {
    return (
      <div>
        <h1>Ma Todo List</h1>
        <form>
          <input
            value={this.state.userInput}
            type="text"
            placeholder="Renseigner un item"
            onChange={this.onChange.bind(this)}
          />
          <button onClick={this.addToDo.bind(this)}>Ajouter</button>
        </form>
        <div>{this.renderTodos()}</div>
      </div>
    );
  }
}

export default TodoList;

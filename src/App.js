import "./App.css";
import React, { Component } from "react";
import { CardList } from "./components/card-list/card-list.component.jsx";

class App extends Component {
  constructor() {
    super();
    this.state = {
      Monsters: [],
    };
  }
  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => {
        this.setState({ Monsters: users });
      });
  }
  render() {
    return (
      <div className="App">
        <CardList monsters={this.state.Monsters}> </CardList>
      </div>
    );
  }
}

export default App;

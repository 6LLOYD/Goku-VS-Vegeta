import "./App.css";
import { Component } from "react";
import Vegeta from "./Vegeta";
import Goku from "./Goku";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      vegeta: 100,
      goku: 100,
    };
  }
  generateRandomNumber() {
    return Math.floor(Math.random() * 15) + 1;
  }
  reduceLife = (param) => {
    const damage = this.generateRandomNumber();
    if (param === "Goku") {
      this.setState((prevState) => ({
        vegeta: prevState.vegeta - damage > 0 ? prevState.vegeta - damage : 0,
      }));
    } else if (param === "Vegeta") {
      this.setState((prevState) => ({
        goku: prevState.goku - damage > 0 ? prevState.goku - damage : 0,
      }));
    }
  };
  render() {
    return (
      <div className="container text-center">
        <h1>Goku Vs Vegeta</h1>
        <hr />
        <div className="row">
          <Vegeta
            render={(saiyan) => saiyan && "Vegeta"}
            life={this.state.vegeta}
            reduceHandler={this.reduceLife}
          />
          <Goku
            name="Goku"
            life={this.state.goku}
            reduceHandler={this.reduceLife}
          />
        </div>
      </div>
    );
  }
}

export default App;

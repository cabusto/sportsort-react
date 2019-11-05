import * as React from "react";
import Header from "../components/Header";
import Order from "../components/Order";
import Inventory from "../components/Inventory";

class App extends React.Component {
  state = {
    fishes: {},
    order: {}
  };

  addFish = fish => {
    // take copy of existing state (don't need deep clone)
    const fishes = { ...this.state.fishes };

    // add new fish to fishes
    fishes[`fish${Date.now()}`] = fish;

    // set new fishes object to state
    this.setState({
      fishes: fishes // i.e App.fishes = fishes. shorthand this.setState({fishes})
    });

    console.log("Adding a fish");
  };
  render() {
    return (
      <div className="Sport Sort">
        <div className="menu">
          <Header tagline="Choose Your Winner!" days={50} />
        </div>
        <Order />
        <Inventory addFish={this.addFish} />
      </div>
    );
  }
}

export default App;

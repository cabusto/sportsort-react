import * as React from "react";
import Header from "../components/Header";
import Order from "../components/Order";
import Inventory from "../components/Inventory";
import sampleFishes from "../sample-fishes";

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

  loadSampleFishes = () => {
    this.setState({ fishes: sampleFishes });
  };

  render() {
    return (
      <div className="catch-of-the-day">
        <div className="menu">
          <Header tagline="Fresh Seafood Market!" days={50} />
        </div>
        <Order />
        <Inventory
          addFish={this.addFish}
          loadSampleFishes={this.loadSampleFishes}
        />
      </div>
    );
  }
}

export default App;

import * as React from "react";
import Header from "../components/Header";
import Order from "../components/Order";
import Inventory from "../components/Inventory";

class App extends React.Component {
  render() {
    return (
      <div className="Sport Sort">
        <div className="menu">
          <Header tagline="Choose Your Winner!" days={50} />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;

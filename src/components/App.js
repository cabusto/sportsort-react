import * as React from "react";
import PlayerCard from "../components/PlayerCard";
import Header from "../components/Header";
import Order from "../components/Order";
import Inventory from "../components/Inventory";

class App extends React.Component {
  render() {
    return (
      <div className="Sport Sort">
        <div className="menu">
          <Header />
        </div>
        <Order />
        <Inventory />
      </div>
    );
  }
}

export default App;

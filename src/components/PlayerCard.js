import * as React from "react";

class PlayerCard extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form className="store-selector">
          {/* curly means run a js code, like a commnet */}
          <h2>Search Players</h2>
          <input type="text" required placeholder="Select Filter" />
          <button type="submit">Filter</button>
        </form>
      </React.Fragment>
    );
  }
}

export default PlayerCard;

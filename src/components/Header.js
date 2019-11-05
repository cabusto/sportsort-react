import * as React from "react";

class Header extends React.Component {
  render() {
    return (
      <header className="top">
        <h1>
          Player
          <span className="ofThe">
            <span className="of">Of</span>
            <span className="the">The</span>
          </span>
          Day
        </h1>
        <h3 className="tagline">
          <span>Choose Your Winner</span>
        </h3>
      </header>
    );
  }
}

export default Header;

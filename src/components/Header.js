import * as React from "react";

const Header = ({ tagline, days }) => (
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
      <span>{tagline}</span>
      <span>{days}</span>
    </h3>
  </header>
);

export default Header;

import * as React from "react";

class LeaguePicker extends React.Component {
  render() {
    return (
      <React.Fragment>
        <form className="store-selector">
          {/* curly means run a js code, like a commnet */}
          <h2>Search Players</h2>
          <input type="text" required placeholder="Select League" />
          <button type="submit">Find League</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LeaguePicker;

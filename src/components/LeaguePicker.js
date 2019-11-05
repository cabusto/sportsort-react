import * as React from "react";

class LeaguePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // stop the form from submitting
    event.preventDefault();
    // get text from input (Golden rule of react: Don't touch the DOM! use state if can)
    console.log(this);
    //Change page to /store/whatever-they-entered
  };

  render() {
    return (
      <React.Fragment>
        <form className="store-selector" onSubmit={this.goToStore}>
          {/* curly means run a js code, like a commnet */}
          <h2>Search Players</h2>
          <input
            type="text"
            ref={this.myInput}
            required
            placeholder="Select League"
            defaultValue="blah"
          />
          <button type="submit">Find League</button>
        </form>
      </React.Fragment>
    );
  }
}

export default LeaguePicker;

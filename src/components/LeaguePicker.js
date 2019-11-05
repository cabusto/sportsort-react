import * as React from "react";

class LeaguePicker extends React.Component {
  myInput = React.createRef();

  goToStore = event => {
    // stop the form from submitting
    event.preventDefault();
    // get text from input (Golden rule of react: Don't touch the DOM! use state if can)
    const leagueName = this.myInput.current.value;
    //Change page to /store/whatever-they-entered
    this.props.history.push(`/league/${leagueName}`);
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
            required={true}
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

import React from "react";

class AppClass extends React.Component {
  state = {
    name: "Warren"
  }

  componentDidMount() {
    console.log("AppClass: Component Has Mounted");
  }

  componentDidUpdate() {
    console.log("AppClass: Component Has Updated");
  }

  handleNameButtonClick = (e) => {
    console.log("AppClass: Component Changes State.");
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  render() {
    console.log("AppClass: Component Renders DOM.");

    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;

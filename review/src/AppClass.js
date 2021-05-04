import React from "react";

class AppClass extends React.Component {
  constructor() {
    console.log("AppClass: Component Loads State");
    super();
    this.state = {
      name: "Warren"
    };
  }

  handleNameButtonClick = (e) => {
    console.log("AppClass: Component Changes State.");
    this.setState({
      ...this.state,
      name: "Allison"
    });
  };

  
  render() {
    console.log("AppClass: Component renders DOM.");
    return (
      <div>
        <h1>Hello {this.state.name}.</h1>
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;

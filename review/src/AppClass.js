import React from "react";

class AppClass extends React.Component {
  // constructor() {
  //   console.log("AppClass: Component Loads State");
  //   super();
  //   this.state = {
  //     name: "Warren"
  //   };
  // }

  state = {
    name: "Warren",
    age: 33,
    profession: "professor"
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

    const showHello = false;

    return (
      <div>
        {
          showHello ? (<h1>Hello {this.state.name}.</h1>) : <p> Loading</p>
        }
        <button onClick={this.handleNameButtonClick}>MAKE IS ALLISON</button>
      </div>
    );
  }
}

export default AppClass;

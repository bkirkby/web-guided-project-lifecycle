import React, { useState, useEffect } from "react";

const AppFunc = () => {
  console.log("AppFunc: Component loads state");
  const [name, setName] = useState("Warren");
  
  const handleClick = () => {
    console.log("AppFunc: Component changes state");
    setName("Allison");
  };

  console.log("AppFunc: Component renders");
  return (
    <div>
      <h1>Hello {name}!</h1>
  
      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;

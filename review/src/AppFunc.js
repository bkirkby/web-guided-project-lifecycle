import React, { useState, useEffect } from "react";

const AppFunc = () => {
  const [name, setName] = useState("Warren");

  useEffect(() => {
    console.log("use effect is called");
    return () => {
      console.log("this is like componentWillUnmount");
    }
  }, [name]);

  const handleClick = () => {
    setName("Allison");
  };

  return (
    <div>
      <h1>Hello {name}!</h1>

      <button onClick={handleClick}>MAKE IT ALLISON!</button>
    </div>
  );
};

export default AppFunc;

import React, { component } from "react";
import Phone from "./Phone.js";
import SignalStrength from "./SignalStrength";

const App = () => {
  return (
    <div>
      <Phone />
      <SignalStrength />
    </div>
  );
};

export default App;

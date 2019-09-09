import React from "react";
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

// import React, { lazy, Suspense } from "react";
// import Phone from "./Phone.js";
// import SignalStrength from "./SignalStrength";
// const SignalStrengthTest = lazy(() => import("./SignalStrength"));

// const App = () => {
//   return (
//     <Suspense fallback={<div>Loading..</div>}>
//       <div>
//         <Phone />
//         <div>another component</div>
//         <SignalStrengthTest />
//       </div>
//     </Suspense>
//   );
// };

// export default App;

import React from "react";
import { render } from "react-dom";
import App from "./components/APP.jsx";


render(<App/>, document.getElementById("root"));


// render(
//   <div>
//     <p>Hello, World!</p>
//     <p>
//       <code>Page Cookie: {JSON.stringify(document.cookie, undefined, "\t")}</code>
//     </p>
//   </div>,
//   document.getElementById("root")
// );

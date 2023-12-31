import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import "./style.css";
import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ChakraProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </ChakraProvider>
  </React.StrictMode>
);
// ReactDOM.render(
//   <React.StrictMode>
//     <ChakraProvider>
//       <BrowserRouter>
//         <App />
//       </BrowserRouter>
//     </ChakraProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );

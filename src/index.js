import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "bootstrap/dist/css/bootstrap.min.css";
import { Provider } from "react-redux";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <StrictMode>
    <BrowserRouter>
    {/* <Provider store={store}> */}
    <App />
    {/* </Provider> */}
    </BrowserRouter>
  </StrictMode>
);
/* box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.05), inset 0 -1px 0 rgba(0,0,0,0.15);  */
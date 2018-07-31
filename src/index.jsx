import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "redux/store/configureStore";
const store = configureStore();

// Components
import App from "components/App.jsx";

// CSS
import "semantic-ui-css/semantic.min.css";

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("app")
);

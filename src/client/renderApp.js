import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux"
import { routes } from "../shared/routes";
import store from "../shared/store";

const render = () => {
	ReactDOM.render(
		<Provider store={store}>{routes}</Provider>,
		document.getElementById("root")
	);
};	

// called everytime an action has been dispatched
store.subscribe(render);

// first time render
render();
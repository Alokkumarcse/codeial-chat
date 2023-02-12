import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import { App } from "./components/";
import { configureStore } from "./store"; // by default import index.js file from store folder
import { Provider } from "react-redux";

/**
 * invoke the configureStore() method to create redux store
 */
const store = configureStore();
console.log(store);
console.log(store.getState());

/**
 * connect our App to store, for do this we need to Provide the store as props to <App />
 * using <Provider store={store}> </Provider> class which is imported form react-redux library.
 */
ReactDOM.render(
	<React.StrictMode>
		<Provider store={store}>
			<App />
		</Provider>
	</React.StrictMode>,
	document.getElementById("root")
);

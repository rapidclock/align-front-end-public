import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';

import SearchPage from './containers/SearchPage';

import registerServiceWorker from './registerServiceWorker';

import  { createStore } from "redux";
import filters from "redux/filter_reducer";


let store = createStore(filters, {
	selectedCoops: [],
	selectedDegrees: [],
	selectedUniversities: [],
	selectedYears: [],
	error: null
});

store.subscribe(() => {
	console.log("store changed", store.getState())
});

const app = document.getElementById('root');


ReactDOM.render(
	<Provider store={store}>
		<SearchPage />
	</Provider>, app);
registerServiceWorker();

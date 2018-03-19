import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';

import SearchPage from './containers/SearchPage';

import registerServiceWorker from './registerServiceWorker';

import  { createStore, combineReducers } from "redux";

import studentFilterReducer from "redux/student_filter_reducer";
import filterGroupReducer from "redux/filter_group_reducer";

const allReducers = combineReducers({
	studentFilter: studentFilterReducer,
	filterGroup: filterGroupReducer
});

let store = createStore(allReducers);

store.subscribe(() => {
	console.log("store changed", store.getState())
});

const app = document.getElementById('root');


ReactDOM.render(
	<Provider store={store}>
		<SearchPage store={store} />
	</Provider>, app);
registerServiceWorker();

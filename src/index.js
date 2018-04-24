import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import SearchPage from './containers/SearchPage';

import registerServiceWorker from './registerServiceWorker';
import  { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from "redux-thunk";
import promise from "redux-promise-middleware";

import studentFilterReducer from './redux/student_filter_reducer';
import filterGroupReducer from './redux/filter_group_reducer';
import aggregateDataReducer from './redux/aggregate_data_reducer';

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

require('./index.css')

const allReducers = combineReducers({
	studentFilter: studentFilterReducer,
	filterGroup: filterGroupReducer,
	aggregateData: aggregateDataReducer
});

let store = createStore(
	allReducers,
	applyMiddleware(thunk, promise())
);

const app = document.getElementById('root');


ReactDOM.render(
	<Provider store={store}>
		<MuiThemeProvider>
			<SearchPage store={store} />
		</MuiThemeProvider>
	</Provider>, app);
registerServiceWorker();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from "react-redux";

import './index.css';

import SearchPage from 'containers/SearchPage';
import store from 'redux/store'

import registerServiceWorker from './registerServiceWorker';

const app = document.getElementById('root');

ReactDOM.render(
	<Provider store={store}>
		<SearchPage />
	</Provider>, app);
registerServiceWorker();

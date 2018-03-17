import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import SearchPage from './containers/SearchPage';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<SearchPage />, document.getElementById('root'));
registerServiceWorker();

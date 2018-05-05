import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware} from 'redux';
//COMPONENTS
import Header from './components/header';
// import UserList from './components/userlist';
// import User from './components/user';
// import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';
const createStoreWithMiddleware = applyMiddleware()(createStore)


ReactDOM.render(
	<Provider store = {createStoreWithMiddleware(reducers)}>
		<App />
	</Provider>
	, document.getElementById('root'));
registerServiceWorker();

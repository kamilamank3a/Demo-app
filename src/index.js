import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {createStore} from 'redux';
import reducers from './reducers';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Menu from './screens/menu';
import History from './screens/history';
import RootPage from './screens/rootPage';
import Factorial from './screens/factorial';

const store = createStore(reducers)

ReactDOM.render(
	<Provider store={store}>
		<Router>
			<div>
				<Route path="/" exact component={RootPage} />
				<Route path="/menu" exact component={Menu} />
				<Route path="/history" exact component={History} />
				<Route path="/factorial" exact component={Factorial} />
			</div>
		</Router>
	</Provider>
	, document.getElementById('root'));


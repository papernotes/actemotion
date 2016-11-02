import React from 'react';
import {render} from 'react-dom';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'

import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import App from './containers/App';
import CreateAccount from './components/CreateAccount';
import Home from './containers/Home';
import Settings from './containers/Settings';
import Analytics from './containers/Analytics';
import NotFound from './components/NotFound';
import Login from './components/Login';
import AddEvent from './components/AddEvent';

import * as reducers from './reducers';

const reducer = combineReducers({
  ...reducers,
  routing: routerReducer
});
const store = createStore(
    reducer,
    applyMiddleware(
        thunkMiddleware
    )
)

const history = syncHistoryWithStore(browserHistory, store);

render(
    <Provider store={store}>
        <Router history={history}>
            <Route path='/' component={App}>
                <IndexRoute component={Login}/>
                <Route path='home' component={Home}/>
                <Route path='create' component={CreateAccount}/>
                <Route path='settings' component={Settings}/>
                <Route path='analytics' component={Analytics}/>
                <Route path='editevent' component={AddEvent}/>
                <Route path='*' component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);

import React from 'react';
import {render} from 'react-dom';

import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunkMiddleware from 'redux-thunk'

import {Provider} from 'react-redux';
import {Router, Route, IndexRoute, browserHistory} from 'react-router';
import {syncHistoryWithStore, routerReducer} from 'react-router-redux';

import App from './containers/App';
import Home from './containers/Home';
import Settings from './containers/Settings';
import Analytics from './containers/Analytics';
import NotFound from './components/NotFound';
import EditEvent from './components/EditEvent';

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
            <Route path="/" component={App}>
                <IndexRoute component={Home}/>
                <Route path="settings" component={Settings}/>
                <Route path="analytics" component={Analytics}/>
                <Route path="editevent" component={EditEvent}/>
                <Route path="*" component={NotFound}/>
            </Route>
        </Router>
    </Provider>,
    document.getElementById('root')
);
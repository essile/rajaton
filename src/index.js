import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import NavigationBar from './containers/NavigationBar';

ReactDOM.render(
    <div>
        <NavigationBar />
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={App} />
            </Switch>
        </Router>
    </div>,
    document.getElementById('root'));

serviceWorker.unregister();

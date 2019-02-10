import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import './index.css';
import * as serviceWorker from './serviceWorker';
import LandingPage from './views/LandingPage';

ReactDOM.render(
    <div>
        {/* <NavigationBar /> */}
        <Router history={history}>
            <Switch>
                <Route exact path='/' component={LandingPage} />
            </Switch>
        </Router>
    </div>,
    document.getElementById('root'));

serviceWorker.unregister();

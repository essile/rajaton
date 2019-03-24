import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Switch, Route } from 'react-router-dom';
import history from './history';

import './index.css';
import * as serviceWorker from './serviceWorker';
import LandingPage from './views/LandingPage';
import Products from './views/Products';
import About from './views/About';
import Contact from './views/Contact';
import ShoppingCart from './views/ShoppingCart';

ReactDOM.render(
    <>
        <Router history={history}>
            <Switch>
                <Route path='/home' component={LandingPage} />
                <Route path='/shop' component={Products} />
                <Route path='/about' component={About} />
                <Route path='/contact' component={Contact} />
                <Route path='/shopping-cart' component={ShoppingCart} />
                <Route exact path='/' component={LandingPage} />
            </Switch>
        </Router>
    </>,
    document.getElementById('root'));

serviceWorker.unregister();

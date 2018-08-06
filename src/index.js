/* eslint-disable no-global-assign */
import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';
import { addStyle } from 'react-bootstrap/lib/utils/bootstrapUtils';
import Button from 'react-bootstrap/lib/Button';
import './styles/index.css';
import Header from './containers/header/Header';
import store, { history } from './store';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

require('es6-shim');

export function init() {
    addStyle(Button, 'yellow');
}

export default ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history} onUpdate={() => window.scrollTo(0, 0)}>
            <div>
                <Header />
            </div>
        </ConnectedRouter>
    </Provider>,
    document.getElementById('root') || document.createElement('div'),
);

init();

import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';

import 'normalize.css';
import './index.scss';

import App from './containers/App/App';
import * as serviceWorker from './serviceWorker';
import store from './redux/store';
import StorageService from './services/StorageService';

StorageService.setItem('userId', '')

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>
    ,document.getElementById('root'));

serviceWorker.unregister();

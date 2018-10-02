import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'semantic-ui-css/semantic.min.css';

import { store } from './helpers';
import { App } from './App';
import registerServiceWorker from './registerServiceWorker';

/*
// setup fake backend
import { configureFakeBackend } from './helpers';
configureFakeBackend();
*/

render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById('app')
);
registerServiceWorker();

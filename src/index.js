import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux';
import {store} from './redux/rootReducer';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';
import App from './App';

const app = (
    <Provider store={store}>
            <App />
    </Provider>
)

ReactDOM.render(app, document.getElementById('root'));



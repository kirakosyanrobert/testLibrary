import {createStore, combineReducers} from 'redux';
import modals from './modals/modalsReducer';

const rootReducer = combineReducers({
    modals,
})

export const store = createStore(
    rootReducer,
);



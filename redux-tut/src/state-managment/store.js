import {createStore, applyMiddleware} from 'redux';
import rootReducer from './reducer';
import logger from 'redux-logger';


const initialState={}

 const store=createStore(
    rootReducer,
    initialState,
    applyMiddleware(logger)
)


export default store;
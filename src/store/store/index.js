
import { createStore, applyMiddleware, combineReducers } from 'redux';
import themeReducer from '../reducers/themeReducer';


const store = createStore(
    combineReducers({ 
        themeReducer 
    }),
    
)


export default store;
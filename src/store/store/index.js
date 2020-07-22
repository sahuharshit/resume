
import { createStore, applyMiddleware, combineReducers } from 'redux';
import themeReducer from '../reducers/themeReducer';
import contentReducer from '../reducers/contentReducer';

const store = createStore(
    combineReducers({ 
        themeReducer,
        contentReducer,

    }),
    
)


export default store;
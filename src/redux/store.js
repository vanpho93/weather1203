import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { cityNameReducer } from './reducers/cityNameReducer';
import { loadingReducer } from './reducers/loadingReducer';
import { tempReducer } from './reducers/tempReducer';

const reducer = combineReducers({
    cityName: cityNameReducer,
    loading: loadingReducer,
    temp: tempReducer
});

export const store = createStore(reducer, applyMiddleware(thunk));

/*
    cityName
    temp
    loading
*/

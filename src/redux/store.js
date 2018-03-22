import { createStore, combineReducers } from 'redux';

import { cityNameReducer } from './reducers/cityNameReducer';
import { loadingReducer } from './reducers/loadingReducer';
import { tempReducer } from './reducers/tempReducer';

const reducer = combineReducers({
    cityName: cityNameReducer,
    loading: loadingReducer,
    temp: tempReducer
});

export const store = createStore(reducer);

/*
    cityName
    temp
    loading
*/

export function cityNameReducer(state = '', action) {
    if (action.type === 'ON_GET_TEMP') return action.cityName;
    if (action.type === 'ON_ERROR') return '';
    return state;
}

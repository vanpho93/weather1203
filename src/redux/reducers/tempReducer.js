export function tempReducer(state = null, action) {
    if (action.type === 'ON_GET_TEMP') return action.temp;
    if (action.type === 'ON_ERROR') return null;
    return state;
}

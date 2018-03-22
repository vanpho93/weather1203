export function loadingReducer(state = false, action) {
    if (action.type === 'ON_START_GET_TEMP') return true;
    if (action.type === 'ON_GET_TEMP') return false;
    if (action.type === 'ON_ERROR') return false;
    return state;
}

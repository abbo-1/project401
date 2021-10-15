const infoReducer = (state = 0, action) => {
    switch (action.type) {
        case "eleven40":
                return state + action.payload;
        case "eleven50":
                return state + action.payload;
    default:
        return state
    }
}

export default infoReducer
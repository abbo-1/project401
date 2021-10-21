const infoReducer = (state = 0, action) => {
    switch (action.type) {
        case "eleven40":
                return state + action.payload + console.log("hello 40");
        case "eleven45":
                return state + action.payload + console.log("hello 45");
    default:
        return state
    }
}

export default infoReducer
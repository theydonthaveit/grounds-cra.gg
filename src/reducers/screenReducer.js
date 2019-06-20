const initialState = {
    screen: 'homeScreenForm'
}

export const screenReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_SCREEN":
            console.log('reducer')
            console.log(action.screen)
            return {
                ...state,
                screen: action.screen
            }

        default:
            return state
    }
}

export default screenReducer
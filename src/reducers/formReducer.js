const initialState = {
    homeScreenForm: true
}

export const formReducer = (state = initialState, action) => {
    switch (action.type) {
        case "SET_HOMESCREEN_FORM":
            return {
                ...state,
                homeScreenForm: false
            }

        default:
            return state
    }
}

export default formReducer
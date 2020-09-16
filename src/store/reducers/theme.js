import { UPDATE_THEME } from '../actions/theme';
import THEME from "../../model/theme";


const initialState = {

    theme: THEME
};

const themeReducer = (state = initialState, action) => {
    switch (action.type) {
        case UPDATE_THEME:
            return {
                ...state,
                theme: action.payload,
            };

        default:
            return state;
    }
};

export default themeReducer;

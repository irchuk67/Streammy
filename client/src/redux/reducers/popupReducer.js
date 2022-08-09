import {CLOSE_POPUP, OPEN_POPUP} from "../types";

const INITIAL_STATE = {open: false};

export default (state= INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_POPUP:
            return {...state, open: true}
        case CLOSE_POPUP:
            return {...state, open: false}
        default:
            return state
    }
}
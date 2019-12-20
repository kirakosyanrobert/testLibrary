import {SHOW_SIGNIN_MODAL, SHOW_SIGNUP_MODAL} from '../actionTypes';

const initalState = {
    showSignInModal: false,
    showSignUpModal: false,
}

export default (state = initalState, action) => {
    switch(action.type) {
        case SHOW_SIGNIN_MODAL:
            return {
                ...state,
                showSignInModal: action.showSignInModal
            }
        case SHOW_SIGNUP_MODAL:
            return {
                ...state,
                showSignUpModal: action.showSignUpModal
            }
        default: 
        return state;
    }
} 


import {SHOW_SIGNIN_MODAL, SHOW_SIGNUP_MODAL} from '../actionTypes';


export const showSignInAction = (showSignInModal) => ({
    type: SHOW_SIGNIN_MODAL,
    showSignInModal: showSignInModal
});


export const showSignUpAction = (showSignUpModal) => ({
    type: SHOW_SIGNUP_MODAL,
    showSignUpModal: showSignUpModal
});



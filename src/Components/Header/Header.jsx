import React, {useState} from 'react';
import { connect } from 'react-redux';
import { showSignInAction, showSignUpAction } from '../../redux/modals/modalsAction';
import { useEffect } from 'react';

const Header = (props) => {
    const {showSignInAction, showSignUpAction} = props;
    const [loggedIn, setLoggedIn] = useState(null);
    const [user, setUser] = useState({})
    const openSignIn = () => {
        showSignInAction(true);
    }

    const openSignUp = () => {
        showSignUpAction(true)
    }

    useEffect(() => {
        if(sessionStorage.getItem('user')) {
            setLoggedIn(true);
            setUser(JSON.parse(sessionStorage.getItem('user')))
        } else {
            setLoggedIn(false);
        }
    }, [sessionStorage.getItem('user')])


    return (
        <div className="d-flex flex-column flex-md-row align-items-center p-3 px-md-4 mb-3 bg-white border-bottom shadow-sm">
            <h5 className="my-0 mr-md-auto font-weight-normal">Library</h5>
            <nav className="my-2 my-md-0 mr-md-3">
                {
                    loggedIn
                    ?
                    <h6>{user.firstname}</h6>
                    :
                    <button
                        className="btn btn-outline-default"
                        type="button"
                        onClick={openSignIn}
                    >
                        Sign In
                    </button>
                }
               
            </nav>
            <button className="btn btn-outline-primary"
            type="button"
            onClick={openSignUp}
            >
                Sign Up
            </button>
        </div>
    )
}

const mapStateToProps = state => ({
    showSignIn: state.modals.showSignInModal,
    showSignUp: state.modals.showSignUpModal
});

const dispatchToProps = dispatch => ({
    showSignInAction: (show) => dispatch(showSignInAction(show)),
    showSignUpAction: (show) => dispatch(showSignUpAction(show))
})

export default connect(mapStateToProps, dispatchToProps)(Header);
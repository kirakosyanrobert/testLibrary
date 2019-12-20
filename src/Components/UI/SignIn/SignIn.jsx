import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { showSignInAction } from '../../../redux/modals/modalsAction';


const SignInModal = (props) => {
    const {showSignIn, showSignInAction} = props;
    const [show, setShow] = useState(false);
    const [showErr, setShowErr] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');


    useEffect(() => {
        if(showSignIn) {
            setShow(true);
        }

    }, [showSignIn]);

    const handleClose = () => {
        setShow(false);
        showSignInAction(false);
    }

    const signIn = (e) => {
        e.preventDefault();
        let users = JSON.parse(localStorage.getItem('users'));
        users.map(user => {
            if(user.email === email && user.password === password) {
                sessionStorage.setItem('user', JSON.stringify(user));
                handleClose();
            } else {
                setShowErr(true)
            }
        })
    }

   
    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
            <Modal.Title>Sign In</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => signIn(e)}>
                    <Form.Group controlId="formBasicEmail">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                             placeholder="Enter email"
                             value={email}
                             onChange={(e) => setEmail(e.target.value)}
                        />
                    </Form.Group>

                    <Form.Group controlId="formBasicPassword">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password"
                            placeholder="Password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                        />
                        {
                            showErr && <Form.Text className="text-danger">
                                        Invalid Login or Password
                                    </Form.Text>
                        }
                    </Form.Group>

                    <Button variant="primary" type="submit">
                        Sign In
                    </Button>
                </Form>
            </Modal.Body>
      </Modal>
    )
}

const mapStateToProps = state => ({
    showSignIn: state.modals.showSignInModal,
});

const dispatchToProps = dispatch => ({
    showSignInAction: (show) => dispatch(showSignInAction(show)),
})


export default connect(mapStateToProps, dispatchToProps)(SignInModal);
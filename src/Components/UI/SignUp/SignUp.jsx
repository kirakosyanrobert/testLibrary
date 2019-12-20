import React, {useState, useEffect} from 'react';
import { connect } from 'react-redux';
import { Modal, Button, Form } from 'react-bootstrap';
import { showSignUpAction } from '../../../redux/modals/modalsAction';

const SignUpModal = (props) => {
    const {showSignUp, showSignUpAction} = props;
    const [show, setShow] = useState(false);
    const [showErr, setShowError] = useState(false)
    const [name, setName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');



    useEffect(() => {
        if(showSignUp) {
            setShow(true);
        }

    }, [showSignUp]);

    const handleClose = () => {
        setShow(false);
        showSignUpAction(false);
    }

    const signUp = (e) => {
        e.preventDefault();
        if(!name || !lastName || !email || !password) {
            return setShowError(true);
        } else  {
            let user = {
                id: `${name}${Date.now()}`,
                firstname: name,
                lastname: lastName,
                email: email,
                password: password,
                books: []
            }

            let users = JSON.parse(localStorage.getItem('users'));
            users.push(user);
            localStorage.setItem('users', JSON.stringify(users));
            handleClose();
        }
    }
  

    return (
        <Modal show={show} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Sign Up</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form onSubmit={(e) => signUp(e)}>
                    <Form.Group >
                        <Form.Label>First Name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter First name"
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Last Name</Form.Label>
                        <Form.Control type="text"
                            placeholder="Enter Lirst name"
                            value={lastName}
                            onChange={(e) => setLastName(e.target.value)}
                          />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email"
                            placeholder="Enter email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                          />
                    </Form.Group>

                    <Form.Group >
                        <Form.Label>Password</Form.Label>
                        <Form.Control
                            type="password"
                            placeholder="Password" 
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                          />
                           {
                                showErr && <Form.Text className="text-danger">
                                        Fill in Inputs Correctly
                                    </Form.Text>
                            }
                    </Form.Group>
                  

                    <Button variant="primary" type="submit">
                        Sign Up
                    </Button>
                </Form>
            </Modal.Body>
      </Modal>
    )
}


const mapStateToProps = state => ({
    showSignUp: state.modals.showSignUpModal,
});

const dispatchToProps = dispatch => ({
    showSignUpAction: (show) => dispatch(showSignUpAction(show)),
})

export default connect(mapStateToProps, dispatchToProps)(SignUpModal);

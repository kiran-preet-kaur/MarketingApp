import React, { Component } from 'react';
import Loader from '../../layouts/Loader';
import { Redirect } from 'react-router-dom';
import { Form, Button, Col, Row, Container } from 'react-bootstrap';

class Login extends Component {
    constructor(...args) {
        super(...args);
        this.state = {
            screen: 'Login',
            loading: false,
            email: '',
            password: '',
            password2: '',
            name: '',
            phone: '',
            err: null
        }
    }

    handleLogin = () => {
        this.setState({
            loading: true
        });
        this.props.getLogin(this.state.email, this.state.password);


    }

    handleRegister = () => {
        this.setState({
            loading: true
        });

        if (this.state.password === this.state.password2) {
            this.props.registerUser(this.state.name, this.state.email, this.state.password, this.state.phone);
        } else {
            this.setState({
                err: 'Passwords do not match'
            })
        }
    }

    handleEmailChange = (event) => {
        this.setState({
            email: event.target.value
        })
    }

    handlePasswordChange = (event) => {
        this.setState({
            password: event.target.value
        })
    }

    LoginForm = () => {
        return (
            <>
                <h1 className="text-center mb-5">Login Form</h1>
                <Form onSubmit={this.handleLogin} className="container">
                    <Form.Group as={Row} controlId="formBasicEmail" className="mb-2" >
                        <Form.Label column sm="2">Email address</Form.Label>
                        <Col sm="10">
                            <Form.Control type="email" placeholder="abc@xyz.com" onChange={this.handleEmailChange} />
                        </Col>
                    </Form.Group>

                    <Form.Group as={Row} controlId="formBasicPassword" className="mb-2">
                        <Form.Label column sm="2">Password</Form.Label>
                        <Col sm="10">
                            <Form.Control type="password" placeholder="password" onChange={this.handlePasswordChange} />
                        </Col>
                    </Form.Group>
                    {this.props.error && <div className="text-danger mt-2">{this.props.error}</div>}
                    <div className="text-center">
                        <Button variant="primary" type="submit" className="mt-2 mb-2">
                            Submit
                    </Button>
                    </div>
                </Form>
                <div className="text-center container mt-2">Don't have an account? <span onClick={this.showRegisterForm}>Register</span></div>
            </>
        )
    }

    handleNameChange = (event) => {
        this.setState({
            name: event.target.value
        })
    }

    handlePassword2Change = (event) => {
        this.setState({
            password2: event.target.value
        })
    }

    handlePhoneChange = (event) => {
        this.setState({
            phone: event.target.value
        })
    }

    showRegisterForm = () => {
        this.setState({
            screen: 'Register'
        });
    }

    RegisterForm = () => {
        return (
            <>
                <div onClick={this.showLoginForm}><i class="fa-solid fa-chevron-left"></i>Back to Login</div>
                <h1 className="text-center mb-2">Register Form</h1>
                <Form onSubmit={this.handleRegister}>
                    <Form.Group controlId="formBasicEmail" className="mb-2">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" placeholder="Enter name*" onChange={this.handleNameChange} />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="mb-2">
                        <Form.Label>Phone</Form.Label>
                        <Form.Control type="text" placeholder="Enter phone" onChange={this.handlePhoneChange} />

                    </Form.Group>
                    <Form.Group controlId="formBasicEmail" className="mb-2">
                        <Form.Label>Email address</Form.Label>
                        <Form.Control type="email" placeholder="Enter email*" onChange={this.handleEmailChange} />

                    </Form.Group>

                    <Form.Group controlId="formBasicPassword" className="mb-2">
                        <Form.Label>Password</Form.Label>
                        <Form.Control type="password" placeholder="Password*" onChange={this.handlePasswordChange} />
                    </Form.Group>
                    <Form.Group controlId="formBasicPassword" className="mb-2">
                        <Form.Label>Re-enter Password</Form.Label>
                        <Form.Control type="password" placeholder="Re-enter Password*" onChange={this.handlePassword2Change} />
                    </Form.Group>
                    <Button variant="primary" type="submit" className="mt-2 mb-2">
                        Submit
                        </Button>
                </Form>

            </>
        )
    }

    showLoginForm = () => {
        this.setState({
            screen: 'Login'
        })
    }

    componentDidMount() {
        if (localStorage.getItem('token')) {
            this.setState({
                loading: true
            })
            this.props.getUser();
        }
    }


    render() {
        //const { } = this.props;

        if (this.props.isAuthenticated && this.props.user) {
            return <Redirect to='/' />
        }
        else if (this.state.loading && !this.props.error) {
            return <Loader />
        } else {
            return (<Container fluid style={{ height: '80vh' }}>
                {this.state.screen === 'Login' ? this.LoginForm() : this.RegisterForm()}

            </Container>
            );
        }
    }
}


export default Login;
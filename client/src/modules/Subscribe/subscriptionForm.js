import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

class Subscribe extends Component {
  constructor(...args) {
    super(...args);
    this.state = {
      name: '',
      email: '',
      content: '',
      err: null,
      msg: null
    }
  }

  handleNameChange = (event) => {
    this.setState({
      name: event.target.value
    })
  }

  handleEmailChange = (event) => {
    this.setState({
      email: event.target.value
    })
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    let { name, email } = this.state;
    if (name == '' || email == '') {
      this.setState({ err: 'Please fill in all fields' });
    } else {
      const res = await axios.post('/api/mail/subscribe', {
        name, email
      });
      if (res.status == 200 && res.data.msg != "User already subscribed!") {
        this.setState({ msg: "You're subscribed!", err: null })
      } else if (res.data.msg == "User already subscribed!") {
        this.setState({ err: 'You are already subscribed' });
      }
      else {
        this.setState({ err: 'Error in subscription. Please try again!' });
      }
    }

  }

  render() {
    const { msg, err } = this.state;
    return (
      <Container fluid style={{ height: '80vh' }}>
        <div className="text-center">Get notified when the product is in stock!</div>
        <Form onSubmit={this.handleFormSubmit} className="container" >
          <Form.Group controlId="exampleForm.ControlInput1" className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" onChange={this.handleNameChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1" className="mb-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={this.handleEmailChange} />
          </Form.Group>
          <Button variant="dark" type="submit" className="mt-2">
            Submit
        </Button>
          {err && <div className="text-danger mt-2">{err}</div>}
          {msg && <div className="text-success mt-2">{msg}</div>}
        </Form>
      </Container>
    );
  }
}



export default Subscribe;
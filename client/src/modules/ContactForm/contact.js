import React, { Component } from 'react';
import axios from 'axios';
import { Form, Button, Container } from 'react-bootstrap';

class Contact extends Component {
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

  handleContentChange = (event) => {
    this.setState({
      content: event.target.value
    })
  }

  handleFormSubmit = async (event) => {
    event.preventDefault();
    let { name, email, content } = this.state;
    if (name == '' || email == '' || content == '') {
      this.setState({ err: 'Please fill in all fields', msg: null });
    } else {
      const res = await axios.post('/api/mail', {
        name, email, content
      });
      if (res.status == 200) {
        this.setState({ msg: 'Your message has been sent!', err: null })
      } else {
        this.setState({ err: 'Error in sending message' });
      }
    }

  }

  render() {
    const { msg, err } = this.state;
    return (
      <Container fluid style={{ height: '80vh' }}>
        <h1 className="text-center">Contact Us!</h1>
        <Form onSubmit={this.handleFormSubmit} className="container" >
          <Form.Group controlId="exampleForm.ControlInput1" className="mb-2">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" placeholder="Name" onChange={this.handleNameChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlInput1" className="mb-2">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="name@example.com" onChange={this.handleEmailChange} />
          </Form.Group>
          <Form.Group controlId="exampleForm.ControlTextarea1" className="mb-2">
            <Form.Label>Message</Form.Label>
            <Form.Control as="textarea" rows={3} onChange={this.handleContentChange} />
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



export default Contact
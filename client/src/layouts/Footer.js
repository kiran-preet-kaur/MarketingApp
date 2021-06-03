import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Footer = props => {
  //const { } = props;
  return (
    <Container fluid className="bg-primary p-5">
      <Row xs={1} md={2}>
        <Col className="mb-5 text-center">
          Lumen
      </Col>
        <Col>
          <a href="https://instagram.com" className="text-white container"><i className="fab fa-instagram"></i></a>
          <a href="https://facebook.com" className="text-white container"><i className="fab fa-facebook-square"></i></a>
          <a href="https://twitter.com" className="text-white container"><i className="fab fa-twitter"></i></a>
          <a href="https://youtube.com" className="text-white container"><i className="fab fa-youtube"></i></a>
        </Col>
      </Row>
    </Container>
  );
};


export default Footer;
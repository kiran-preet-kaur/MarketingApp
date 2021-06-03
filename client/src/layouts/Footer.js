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
          <Link to="instagram.com" className="text-white container"><i className="fab fa-instagram"></i></Link>
          <Link to="facebook.com" className="text-white container"><i className="fab fa-facebook-square"></i></Link>
          <Link to="twitter.com" className="text-white container"><i className="fab fa-twitter"></i></Link>
          <Link to="youtube.com" className="text-white container"><i className="fab fa-youtube"></i></Link>
        </Col>
      </Row>
    </Container>
  );
};


export default Footer;
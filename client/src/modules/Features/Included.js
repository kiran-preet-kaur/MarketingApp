import React from 'react';
import { Button, Col, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Included = props => {
  const {} = props;
  return (
    <Container>
        <h2 className="text-center">What you get</h2>
        <Row xs={2} md={3}>
          <Col>
            <Card border="light">
              <Card.Img variant="top" src="/images/device.png" />
              <Card.Body>
                <Card.Text>
                  Lumen Device
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light">
              <Card.Img variant="top" src="/images/chargingDock.png" />
              <Card.Body>
                <Card.Text>
                  Charging Dock
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>

          <Col>
            <Card border="light">
              <Card.Img variant="top" src="/images/USBCable.png" />
              <Card.Body>
                <Card.Text>
                  USB Cable
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light">
              <Card.Img variant="top" src="/images/travelCase.png" />
              <Card.Body>
                <Card.Text>
                  Travel Case
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light">
              <Card.Img variant="top" src="/images/app.png" />
              <Card.Body>
                <Card.Text>
                  Mobile App
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col>
            <Card border="light">
              <Card.Img variant="top" src="/images/customerCare.png" />
              <Card.Body>
                <Card.Text>
                  Customer Care
              </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
        <Row><Link to="/contact-us" className="text-center pt-5" ><Button className="mt-2 mb-5 center">Contact Us</Button></Link></Row>
      </Container>
  );
};


export default Included
import React from 'react';
import { Carousel, Button, Col, Card, Container, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
const Included = props => {
  const {} = props;
  return (
    <>
    <Container>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <Carousel>
              <Carousel.Item> <img className="d-block w-100" src="/images/carouselImg1.jpg" alt="First slide" /> </Carousel.Item>
              <Carousel.Item> <img className="d-block w-100" src="/images/carouselImg2.jpg" alt="Second slide" /> </Carousel.Item>
              <Carousel.Item> <img className="d-block w-100" src="/images/carouselImg3.jpg" alt="Third slide" /> </Carousel.Item>
            </Carousel>
          </Col>
          <Col className="align-middle" style={{margin: 'auto'}}>
            <h1><b>Metabolism Tracker</b></h1>
            <h2 className="pt-2 pb-5" style={{fontWeight: 100}}>Hack your Metabolism &amp; lose weight</h2>
            <div>Coming soon</div>
            <Link to="/subscribe" ><Button className="mt-2 mb-5">Notify Me!</Button></Link>
          </Col>
        </Row>
      </Container>
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
      </>
  );
};


export default Included
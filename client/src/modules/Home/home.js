import React from 'react';
import { Button, Card, Col, Container, Row } from 'react-bootstrap';
import Carousel from 'react-bootstrap/Carousel'
import { Link } from 'react-router-dom';

const Home = props => {
  const { } = props;
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
          <Col className="align-middle">
            <h1>Metabolism Tracker</h1>
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
      </Container>

      <Container className="p-5">
        <h2 className="text-center mb-5">Technical specifications</h2>
        <Row xs={1} md={2} className="g-4">
          <Col>
            <h4>Connectivity</h4>
            <div className="specs-content">
              <div className="specs-text">
                <strong className="font-weight-bold">iOS compatibility (iOS 8 and higher)</strong><br /><span>iPhone 6 and more recent</span><br /><br /> <strong className="font-weight-bold"><span>Android compatibility (8.0 and higher)</span></strong><br /><span>Recommended higher than 720 x 1280 pixels</span><br /><br /> <strong className="font-weight-bold"><span>Bluetooth connectivity</span></strong><br /><span>Bluetooth Low Energy needed</span><br /><br /> <strong className="font-weight-bold"><span>Application connectivity</span></strong><br /><span>Apple Health Kit</span><br /><span>Google Fit</span><br /><br /> <strong><span>*Cannot be set up from a computer</span></strong>
              </div>
            </div>
          </Col>
          <Col>
            <h4>Device</h4>
            <div>
              <strong><span>Conditions of use</span></strong> <br /><span>Not water resistant or water proof</span> <br /><span>Operating temperature: 15°C to 40°C (59°F to 104°)</span> <br /><span>Storage temperature: -30°C to 70°C (-22°F to 158°)</span> <br /> <br /> <strong><span>Sensors</span></strong><br /><span>CO2 sensor</span><br /><br /> <strong><span>Single battery charge lasts</span></strong> <br /><span>Up to 14 days in normal use</span> <br /><span>Lithium polymer battery</span> <br /> <br /> <strong><span>Dimensions and weight</span></strong> <br /><span>Lumen device: 102mm x 41.4mm x 33.3mm, 75g</span> <br /><span>Lithium polymer battery</span> <br /><span>Docking station: 14.5mm x 79.5mm x 68mm, 145g</span> <br /><span>Connections: USB-c</span>
            </div>
          </Col>
        </Row>
      </Container>

    </>
  );
};


export default Home
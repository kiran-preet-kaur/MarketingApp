import React from 'react';
import { Button, Col, Container, Row } from 'react-bootstrap';
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
          <Col className="align-middle" style={{margin: 'auto'}}>
            <h1><b>Metabolism Tracker</b></h1>
            <h2 className="pt-2 pb-5" style={{fontWeight: 100}}>Hack your Metabolism &amp; lose weight</h2>
            <div>Coming soon</div>
            <Link to="/subscribe" ><Button className="mt-2 mb-5">Notify Me!</Button></Link>
          </Col>
        </Row>
      </Container>
    </>
  );
};


export default Home
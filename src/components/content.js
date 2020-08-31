import React from 'react';
import '../App.css';
import Carousel from 'react-bootstrap/Carousel';


class Content extends React.Component {



  render() {
    return (
      <div style={{backgroundColor: "lightblue"}} className="App">
        <h1 style={{color: "blue"}}>TV Series</h1>



<Carousel>
  <Carousel.Item>
  <a href="/create"><img height="600" width="1200"
      className="d-block w-100"
      alt="Second slide"
    /></a>

    <Carousel.Caption>
      <h3 style={{color: "blue"}}>Why not update the list? </h3>
    </Carousel.Caption>
  </Carousel.Item>
  <Carousel.Item>
  <a href="/read"><img height="600"
      className="d-block w-100"
      src="http://images6.fanpop.com/image/photos/34100000/Tv-Shows-tv-shows-family-34187485-1024-768.jpg"
      alt="First slide"
    /></a>
    <Carousel.Caption>
      <h3 style={{color: "blue"}}>Top?</h3>
    </Carousel.Caption>
  </Carousel.Item>

  <Carousel.Item>
  <a href="/contact"><img height="600"
      className="d-block w-100"
      src="https://akm-img-a-in.tosshub.com/indiatoday/images/story/201909/contact-details-3381225_1280-770x433.jpeg?BbL8N.RKJ6scNSKjUSEXn7_XbVnXN1wp"
      alt="Third slide"
    /></a>

    <Carousel.Caption>
      <h3 style={{color: "blue"}}>Dont hesitate to inform us on any probelms :) </h3>
    </Carousel.Caption>
  </Carousel.Item>
</Carousel>

        
      </div>
    );
  }
}

export default Content;
import React from 'react';  
 
import "react-bootstrap/carousel"; // requires a loader  
import Carousel from 'react-bootstrap/Carousel';
   
export default class HomeBanner extends React.Component {

    render() {
        const CarouselBanner = {
            width:"100%",
            height:"500px"
          };
        return (
            <>
      <Carousel>
      <Carousel.Item>
        <img
       style={CarouselBanner}
          className="d-block "
          src="images/amanda-lim-bXnZ5zCaQNI-unsplash.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>First slide label</h3>
          <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={CarouselBanner}
          className="d-block "
          src="images/amanda-lim-bXnZ5zCaQNI-unsplash.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3>Second slide label</h3>
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
        style={CarouselBanner}
          className="d-block "
          src="images/amanda-lim-bXnZ5zCaQNI-unsplash.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
          <h3>Third slide label</h3>
          <p>
            Praesent commodo cursus magna, vel scelerisque nisl consectetur.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>

          </>
            
        )
    }
}
   
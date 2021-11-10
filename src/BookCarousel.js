import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';

export default class BookCarousel extends React.Component {

  render() {
    return (
        
        <>
        {/* <img
          className="d-block w-100"
          src="./src/ferrari.jpg"
          alt="First slide"
        /> */}
        <Carousel.Caption>
          <h3>{this.props.books.title}</h3>
          <p>{this.props.books.description}</p>
        </Carousel.Caption>
        </>
      
      
      
      
    )
  }
}
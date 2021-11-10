import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import img from './ferrari.jpg'

export default class Book extends React.Component {

  render() {
    return (
        
        <>
        <img
          className="d-block w-100"
          src={img}
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>{this.props.book.title}</h3>
          <p>{this.props.book.description}</p>
        </Carousel.Caption>
        </>
      
      
      
      
    )
  }
}
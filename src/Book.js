import React from 'react';
import { Carousel } from 'react-bootstrap';
import { Container } from 'react-bootstrap';
import img from './ferrari.jpg'
import Button from 'react-bootstrap/Button'

export default class Book extends React.Component {


    handleClick = () =>{
      this.props.delBooks(this.props.book._id)
    }
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
          <Button onClick = {this.handleClick}> Delete Book</Button>
        </Carousel.Caption>
        </>
      
      
      
      
    )
  }
}
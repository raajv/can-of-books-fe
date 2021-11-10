import React, {Component} from 'react';
import  Carousel  from 'react-bootstrap/Carousel';
import { Container } from 'react-bootstrap';
import Book from './Book.js'

export default class BookCarousel extends Component {

  render() {
    return (
        <Container>
        <Carousel>
        {this.props.books.map(book => <Carousel.Item key={book._id} ><Book book={book} /> </Carousel.Item>)}
        </Carousel>
        </Container>  
    )
  }
}
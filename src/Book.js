import React from 'react';
import { Carousel } from 'react-bootstrap';
import img from './ferrari.jpg'
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'
import Modal from 'react-bootstrap/Modal'

export default class Book extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      
      showUpdate : false
    }
  }

    handleClick = () =>{
      this.props.delBooks(this.props.book._id)
    }
    handleSubmit = (e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const description = e.target.description.value;
      const id = this.props.book._id
      
      
      this.props.updatedBooks(id,{title,description})
      this.closeModal()
}
    handleUpdateClick = () => {
      this.openModal()
    }

    closeModal = () =>{
      this.setState({showUpdate : false})
    }
   
    openModal = () =>{
     this.setState({showUpdate : true})
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
          <Button onClick = {this.handleUpdateClick}> Update Book</Button>
          <Modal show={this.state.showUpdate} onHide={this.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Update a Book !</Modal.Title>
          </Modal.Header>
          <Modal.Body>
          <Form onSubmit = {this.handleSubmit}>
          <Form.Group className="mb-3" controlId="title">
          <Form.Label>Title</Form.Label>
          <Form.Control type="text" placeholder="Enter your book title here" />
          </Form.Group>

         <Form.Group className="mb-3" controlId="description">
          <Form.Label>Description</Form.Label>
          <Form.Control as="textarea" rows ={3} placeholder="Enter a short book description" />
          </Form.Group>
          <Button variant="primary" type="submit">
          EDIT
         </Button>
         </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer> 
          </Modal>
          </Carousel.Caption>
          
        </>
      
      
      
      
    )
  }
}
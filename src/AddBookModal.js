import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'
import Form from 'react-bootstrap/Form'



export default class AddBookModal extends Component {

    handleSubmit = (e) => {
      e.preventDefault();
      const title = e.target.title.value;
      const description = e.target.description.value;
      console.log(title,description)
      this.props.addBooks({title,description})
      this.props.closeModal()

    }

  render() {
    return (
      
          <Modal show={this.props.show} onHide={this.props.closeModal}>
          <Modal.Header closeButton>
            <Modal.Title>Add a Book !</Modal.Title>
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
          ADD BOOK !
         </Button>
         </Form>
          </Modal.Body>
          <Modal.Footer>
          </Modal.Footer> 
          </Modal>
      
    );
  }
}
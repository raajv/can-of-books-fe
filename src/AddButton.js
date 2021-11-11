import React, { Component } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button'



export default class AddBookModal extends Component {

  handleClick =()=>{
    this.props.openModal()
  }

  render() {
    return (
      
          <Button onClick = { this.handleClick}> ADD A BOOK </Button>
      
    );
  }
}
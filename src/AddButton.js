import React, { Component } from 'react';

import Button from 'react-bootstrap/Button'



export default class AddBookModal extends Component {

  handleClick =()=>{
    this.props.openModal()
  }

  render() {
    return (
      
          <Button onClick = { this.handleClick}> ADD AN IMAGE </Button>
      
    );
  }
}
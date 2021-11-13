import React from 'react';
import axios from 'axios';
import BookCarousel from './BookCarousel';
import { Carousel, Container } from 'react-bootstrap';
import AddBookModal from './AddBookModal.js';
import AddButton from './AddButton.js'
import Book from './Book'


class BestBooks extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      books: [],
      show : false
    }
  }

  getBooks = async()=>{
    let url = `${process.env.REACT_APP_SERVER_URL}books?email=${this.props.user}`;
    const response = await axios.get(url);
    this.setState({books:response.data})
    console.log(response.data)
  }
  addBooks = async(newBook)=>{
    let url = `${process.env.REACT_APP_SERVER_URL}books?email=${this.props.user}`;
    const response = await axios.post(url,newBook);
    let newBooks =[ ...this.state.books , response.data]
    this.setState({books: newBooks});
    this.getBooks()
    console.log(newBook)
  }
  delBooks = async(id)=>{
    let url = `${process.env.REACT_APP_SERVER_URL}books/${id}?email=${this.props.user}`;
    let remainingBooks = this.state.books.filter(book=> book._id !== id)
    await axios.delete(url)
    this.setState({books: remainingBooks})
    console.log(`remianing books : ${remainingBooks}`)
  }
  editBooks = async(id,updatedBook)=>{
    let url = `${process.env.REACT_APP_SERVER_URL}books/${id}?email=${this.props.user}`;
    const response = await axios.put(url,updatedBook);
    this.getBooks()
    console.log(`updated book: ${updatedBook}`)
  }
 closeModal = () =>{
   this.setState({show : false})
 }

 openModal = () =>{
  this.setState({show : true})
}

  componentDidMount(){
    this.getBooks();
  }

  

  render() {

    

    return (
      <>
        <h2>My Essential Lifelong Learning &amp; Formation Shelf</h2>

        {this.state.books.length ? (<BookCarousel books={this.state.books} delBooks = {this.delBooks} updatedBooks = { this.editBooks}/>) : (
          <h3>No Books Found </h3>
          )}
          <AddButton openModal = { this.openModal}/>
          <AddBookModal show = { this.state.show} closeModal= {this.closeModal} addBooks = {this.addBooks}/>
         
      </>
    )
  }
}

export default BestBooks;

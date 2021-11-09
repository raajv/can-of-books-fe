import { Component } from 'react'
import LoginForm from './LoginForm';

export default class LoginButton extends Component {
  constructor(props) {
    super(props); 
      this.state = {
        click : false,
      }
    }
  
  handleClick = () => {
    this.setState({click : true})
  }

  render() {

   return (
    <>
    {this.state.click ? <LoginForm loginHandler={this.props.loginHandler}/> : <button onClick={this.handleClick}>Log In</button>}
    </>
   )
  
  }
}

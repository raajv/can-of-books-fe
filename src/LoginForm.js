import { Component } from "react";

class LoginForm extends Component {

  
    
    constructor(props) {
      super(props); 
        this.state = {
          user : '',
        }
      }
  
    handleClick = () => {
      this.props.loginHandler(this.state.user)
    }
    
    handleChange = (e) => {
          this.setState({user : e.target.value})
    }
  
    render() {
    return (
      <>
        <input onChange={this.handleChange} type="text" placeholder="Enter your email"/>
        <button onClick={this.handleClick} variant="primary" type="submit">Log In
        </button>
      
      </>

    );
  }
};

export default LoginForm;

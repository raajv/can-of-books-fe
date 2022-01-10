import React from 'react';
import { withAuth0 } from '@auth0/auth0-react';
import LoginButton from './LoginButton';
import LogoutButton from './LogoutButton';
import Header from './Header';
import Footer from './Footer';
import Login from './Login';
import BestBooks from './BestBooks';
import 'bootstrap/dist/css/bootstrap.min.css';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import "./app.css"

class App extends React.Component {

  
  

  render() {
    return (
      <>
      
        <LoginButton />
        <LogoutButton />
        {this.props.auth0.isAuthenticated && 
          <>
          <Router>
          <Header user={this.props.auth0.user} onLogout={this.logoutHandler} />
          <Switch>
            <Route exact path="/">
             <BestBooks user={this.props.auth0.user.email} /> 
            </Route>
            <Login loginHandler={this.loginHandler}/>
            
          </Switch>
          <Footer />
        </Router>



          </>
        }
      
      </>
    )
  }
}

export default withAuth0(App);

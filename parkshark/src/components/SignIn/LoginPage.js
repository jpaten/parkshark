import React, {useState, useEffect} from "react";
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom';
import fire from './fire';
import 'firebase/auth';
import Login from './Login';
import Home from '../Home/Home'
import Navbar from '../Navbar/Navbar';
import Listings from '../Listings/Listings';
import ListingPage from "../Listings/listingPage"
import Profile from "../Profile/Profile";
import About from "../About/About";
import Navbar2 from "../Navbar/Navbar2";
import './LoginPage.css';
function LoginPage() {

  //set up the initial states//
  const[user, setUser] = useState('');
  const[email, setEmail] = useState('');
  const[password, setPassword] = useState('');
  const[emailError, setEmailError] = useState('');
  const[passwordError, setPasswordError] = useState('');
  const[hasAccount, setHasAccount] = useState(false);

  //two cleanup functions to clear inputs and error messages
  const clearInputs = () => {
    setEmail('');
    setPassword('');
  };

  const clearErrors = () => {
    setEmailError('');
    setPasswordError('');
  };

  const handleLogin = () => {
    clearErrors();
    fire
      .auth()
      .signInWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
          case "auth/invalid-email":
          case "auth/user-disabled":
          case "auth/user-not-found":
            setEmailError(err.message);
            break;
          case "auth/wrong-password":
            setPasswordError(err.message);
            break;
          default: break;
        }
      });
  };

  const handleSignup = () => {
    clearErrors();
    fire
      .auth()
      .createUserWithEmailAndPassword(email,password)
      .catch(err => {
        switch(err.code){
          case "auth/email-already-in-use":
          case "auth/invalid-email":
            setEmailError(err.message);
            break;
          case "auth/weak-password":
            setPasswordError(err.message);
            break;
        }
      });
  };

  const handleLogout = () => {
    fire.auth().signOut();
  };

  const authListener = () => {
    fire.auth().onAuthStateChanged(user => {
      if(user){
        clearInputs();         //whenever we have a user
        setUser(user);
      }
      else {                   //set User to emtpy string if no user
        setUser("");
      }
    });
  };

  useEffect(() =>{
    authListener()             //listen to events
  }, []);


  return (
    <div className="LoginPage">
      {user ? (
      <div className="App">
        <Router>
        {/* <Navbar loggedIn={fire.auth().currentUser} /> */}
        <Navbar2></Navbar2>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Login" component={LoginPage} />
            <Route path="/Listings" component={Listings} />
            <Route path="/Listing" component={ListingPage}/>
            <Route path="/About" component={About} />
            <Route path="/Listings" component={Listings} />
            <Route path="/Profile" component={Profile} />
          </Switch>
        </Router>
      </div>

      ): (
        <Login //with all possible states
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
      )}
    </div>
  );
}

export default LoginPage;

/*<div className="LoginPage">
      {user ? (
      <div className="App">
        <Router>
        {/* <Navbar loggedIn={fire.auth().currentUser} /> }
        <Navbar2></Navbar2>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/Home" component={Home} />
            <Route path="/Login" component={LoginPage} />
            <Route path="/Listings" component={Listings} />
            <Route path="/About" component={About} />
            <Route path="/Profile" component={Profile} />
          </Switch>
        </Router>
      </div>

      ): (
        <Login //with all possible states
        email={email}
        setEmail={setEmail}
        password={password}
        setPassword={setPassword}
        handleLogin={handleLogin}
        handleSignup={handleSignup}
        hasAccount={hasAccount}
        setHasAccount={setHasAccount}
        emailError={emailError}
        passwordError={passwordError}
      />
      )}
    </div> */
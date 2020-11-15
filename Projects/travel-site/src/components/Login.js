 
import GoogleButton from 'react-google-button'
import './style.css';
import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import firebaseConfig from './firebaseConfig';
import {UserContext} from '../App';
import { Button } from 'react-bootstrap';

import React, { useContext, createContext, useState } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  Redirect,
  useHistory,
  useLocation
} from "react-router-dom";


firebase.initializeApp(firebaseConfig);


const Login = () => {
    const [user,setUser]=useContext(UserContext);
    console.log(user);
    var provider = new firebase.auth.GoogleAuthProvider();


    
const history = useHistory();
const location = useLocation();
const { from } = location.state || { from: { pathname: "/login" } };

    function loginGoogle(){
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            var name=user.displayName;
            var email=user.email;
            var state=true;
            var temp={
                name:name,
                email:email,
                state:state
            }
            
            setUser(temp)
            history.replace(from);

            // ...
          }).catch(function(error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // ...
          });
    }

    function logoutGoogle(){
        firebase.auth().signOut().then(function() {
            var temp={
                name:"",
                email:"",
                state:false
            }
            setUser(temp)
          }).catch(function(error) {
            // An error happened.
          });
    }
    return (
        <>
        {
            !user.state && 
            <div>
                <h6 className="text-center my-5">You must login with your google account or gmail</h6>
                <GoogleButton className="google-button d-block mx-auto my-5"
            onClick={ loginGoogle }/>
            </div>
        }
        
        {
            user.state && <div>
                <h4 className="my-5 text-center text-dark">Welcome {user.name}</h4>
                <button onClick={logoutGoogle} className=" btn btn-danger px-5 d-block mx-auto my-5"  >Logout</button>
            </div>
        }
            
        </>
    );
};

export default Login;
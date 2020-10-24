import React, {useContext} from 'react';
import * as firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";
import './style.css';
import firebaseConfig from './firebaseConfig';
import {UserContext} from '../App';

firebase.initializeApp(firebaseConfig);

const Google = () => {
    const [user,setUser]=useContext(UserContext);

    const provider = new firebase.auth.GoogleAuthProvider();
    function loginGoogle(){
        firebase.auth().signInWithPopup(provider).then(function(result) {
            // This gives you a Google Access Token. You can use it to access the Google API.
            var token = result.credential.accessToken;
            // The signed-in user info.
            var user = result.user;
            // ...
            console.log(user);
            var name=user.displayName;
            var email=user.email;
            var  info={
                name:name,
                email:email,
                state:true
            }
            setUser(info);
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
    function logout(){
        firebase.auth().signOut().then(function() {
            var info={
                name:"",
                email:"",
                state:false
            }
            setUser(info);
          }).catch(function(error) {
            // An error happened.
          });
    }
    return (
        <div>
             {
                 user.state && <button className=" googleButton px-5 py-3 btn btn-light mx-auto d-block" onClick={()=>logout()}>Sign Out</button>
             }

{
                 !user.state && <button className=" googleButton px-5 py-3 btn btn-light mx-auto d-block" onClick={()=>loginGoogle()}>Sign In With Google</button>
             }
            
        </div>
    );
};

export default Google;
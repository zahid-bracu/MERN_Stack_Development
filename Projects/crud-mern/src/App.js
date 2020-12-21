import React, {useState,useContext} from 'react';
import './App.css';
import FormPage from './components/FormPage';
import Navigation from './components/Navigation';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './components/Login';
import Home from './components/Home';
import Contact from './components/Contact';
import {createContext} from 'react';
export const UserContext = React.createContext();


function App() {

  const [user,setUser]=useState({
    name:"",
    mail:"",
    flag:false
  });

  console.log(user);
  return (
    <>
      
      <UserContext.Provider value={[user,setUser]}>
        <Router>
        <Navigation></Navigation>
          <Switch>
            
            <Route path="/form">
            <FormPage></FormPage>
            </Route>


            <Route path="/login">
            <Login></Login>
            </Route>

            <Route path="/contact">
              <Contact></Contact>
            </Route>


            <Route path="/home">
            <Home></Home>
            </Route>

            <Route path="/">
            <Home></Home>
            </Route>


          </Switch>
      </Router>
    </UserContext.Provider>
    </>
  );
}

export default App;
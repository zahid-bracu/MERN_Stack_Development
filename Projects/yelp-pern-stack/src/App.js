
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Detail from './components/Detail/Details';
import Restaurants from './components/Restaurants/Restaurants';
import Update from './components/Update/Update';
import Delete from './components/Restaurants/Delete';
import 'bootstrap/dist/css/bootstrap.min.css';
import RestaurantsContextProvider from './contextapi/RestaurantsContextProvider';
import Navigation from "./components/Nav/Navigation";
import About from './components/About/About';
function App() {
  return (
    <RestaurantsContextProvider>
      <Navigation/>
    <Router>
      <Switch>
        <Route exact path="/" component={Restaurants} />
        <Route exact path="/about" component={About} />
        <Route exact path="/restaurants/:id/update" component={Update} />
        <Route exact path="/restaurants/:id/details" component={Detail} />
        <Route exact path="/restaurants/:id/delete" component={Delete} />
      </Switch>
    </Router>
    </RestaurantsContextProvider>
    
  );
}

export default App;

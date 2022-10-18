
import './App.css';
import {BrowserRouter as Router, Route,Switch } from "react-router-dom";
import background from "./images/newback.jpg";
import Navbar from './Navbar';
import Quote from './Quote';

import Exploring from './Exploring';


function App() {
  return (
    <div className='App'>
    
    <div id="App" style={{ backgroundImage: `url(${background})` }}>
     
    <Navbar/>
      
      </div>
      <Router>
        <Switch>
          <Route exact path="/">
        <Quote/>
        </Route>
        </Switch>
       
        
       
       
            
        
       
       

        </Router>
   
        <Exploring/>
     
      
      </div>
  );
}

export default App;

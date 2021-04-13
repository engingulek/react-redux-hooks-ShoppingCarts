import React from 'react'
import CardDesigns from "./components/CardDesings"
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,

} from "react-router-dom";
import CartDesign from './components/CartDesign';
function App() {
  return (
    <div>
    <Router>
    <Switch>
    <Route exact path="/">
    <CardDesigns/>
    </Route>
    <Route path="/cart">
    <CartDesign/>
    
    </Route>
    
    </Switch>
    
    </Router>

   
      
    </div>
  )
}

export default App

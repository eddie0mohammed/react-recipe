import React, { Component } from 'react'
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './pages/Home';
import Recipes from './pages/Recipes';
import Default from './pages/Default';
import SingleRecipe from './pages/SingleRecipe';
import Navbar from './components/Navbar/Navbar';

import { Route, Switch} from 'react-router-dom';

class App extends Component {
  render() {
    return (
      <div>
        <React.Fragment>
          <Navbar />
        </React.Fragment> 
        <Switch>
          <Route exact path="/" render={(routeProps) => <Home  {...routeProps}/>}/>
          <Route exact path="/recipes" render={(routeProps) => <Recipes {...routeProps}/>}/>
          <Route exact path="/recipes/:id" render={(routeProps) => <SingleRecipe {...routeProps}/>}/>
          <Route  render={() => <Default />}/>
          
        </Switch>
        
      </div>
    )
  }
}

export default App;
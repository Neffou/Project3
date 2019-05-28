import React from 'react';
import { Route, Switch} from 'react-router-dom';

import Home from './../screen/Home'
import Login from './../screen/Login'
import Tracking from './../screen/Tracking'
import Register from './../screen/Register'




function App() {
  return (

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/tracking" component={Tracking} />
        <Route path="/login" component={Login} />
        <Route path="/register" component={Register} />
      </Switch>
  
   
  );
}

export default App;

import React from 'react'
import { Switch, Route, Miss} from 'react-router-dom'
import Home from './Header';
import NotFound from './NotFound';



// The Main component renders one of the three provided
// Routes (provided that one matches). Both the /roster
// and /schedule routes will match any pathname that starts
// with /roster or /schedule. The / route will only match
// when the pathname is exactly the string "/"
const Route = () => (
  <main>
    <Switch>
      <Route exact path='/' component={Header}/>
      <Miss component={NotFound} />

    </Switch>
  </main>
)

export default Route

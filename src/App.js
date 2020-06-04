import React, { Component } from 'react'
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";

class App extends Component {
    render() {
        return (
              <Switch>
                <Route exact path='/' component={Homepage} />
              </Switch>
        )
    }
}

export default App

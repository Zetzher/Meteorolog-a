import React, { Component } from 'react'
import "./App.css";
import { Switch, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import Municipio from "./pages/Municipio";

class App extends Component {
    render() {
        return (
              <Switch>
                <Route exact path='/' component={Homepage} />
                <Route path='/provincia/:id/municipio/:id' component={Municipio} />
              </Switch>
        )
    }
}

export default App

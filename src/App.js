import React, { Component } from "react";
import connectWallet from "./components/Navbar/connectWallet.js";
import './App.css';
import {
  Route,
  Switch,
  Redirect,
  
} from 'react-router-dom';
https://github.com/Jaytechent/MultiSender-BNB-/blob/main/src/components/Navbar/connectWallet.js
import { createBrowserHistory } from "history";

import MetaMask from "./pages/Metamask";
import Tron from "./pages/Tron";

const history = createBrowserHistory();
class App extends Component {

    render() {
      return(
        <Switch history={history}>
          <Route exact path="/" render={props => (<MetaMask {...props} />)}/> 
          {/* <Route exact path="/" render={props => (<Tron {...props} />)}/> */}
        </Switch>
      )     
    }
}
  
  export default App;

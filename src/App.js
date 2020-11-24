import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom"
import Main from "./components/Main"
import Annyang from "annyang"
import "./App.scss"
import DarkMode from "./components/public/DarkMode"
import { GET_INFO } from "./actions/ActionTypes"
import { useDispatch } from "react-redux"
import { useEffect, useState } from "react"
import axios from "axios"
Annyang.setLanguage("ko");
function App() {
  const stt=()=>{
    if (Annyang) {
      var commands = {
        '영실아 *tag': (tag) => {
          window.location.href=tag
        }
      };
      Annyang.addCommands(commands);
      Annyang.start();
    }
  }
  return (
    <>
      <DarkMode></DarkMode>
      <div onClick={stt} className="next"></div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
          <Route path="/:text" component={Main}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

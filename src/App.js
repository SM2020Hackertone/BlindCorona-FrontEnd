import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom"
import Main from "./components/Main"
import Annyang from "annyang"
import "./App.scss"
import DarkMode from "./components/public/DarkMode"
import { GET_INFO } from "./actions/ActionTypes"
import { useDispatch } from "react-redux"
import { useState } from "react"
import axios from "axios"

function App() {
  function Stt() {
    Annyang.setLanguage('ko')
    if (Annyang) {
      var commands = {
        '영실아 *tag': (tag) => {
          axios.get(`http://172.30.1.58:5000/corona-status?text=${tag}`)
          .then((res)=>{
            console.log(res);
          })
        }
      };
      Annyang.addCommands(commands);
      Annyang.start();
    }
  }
  return (
    <>
      <DarkMode></DarkMode>
      <div onClick={Stt} className="next"></div>
      <Router>
        <Switch>
          <Route exact path="/" component={Main}></Route>
        </Switch>
      </Router>
    </>
  );
}

export default App;

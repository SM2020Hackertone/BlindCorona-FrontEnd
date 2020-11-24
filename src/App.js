import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom"
import Main from "./components/Main"
import Annyang from "annyang"
import "./App.scss"
import DarkMode from "./components/public/DarkMode"
import { useEffect, useState } from "react"
Annyang.setLanguage("ko");
function App() {
  const [state,setState]=useState("null");
  useEffect(()=>{
    const speechMsg = new SpeechSynthesisUtterance();
    speechMsg.text="마이크를 사용하시려면 m버튼을 눌러주세요";
    window.speechSynthesis.speak(speechMsg);
    window.addEventListener("keydown", (e) => {
      if(e.key=="m"){
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
    })
  },[])
  function scroll(){
    if(state=="null"){
      document.getElementById("main").style.transform="translate(0, -100vh)";
      document.getElementsByClassName("next")[0].style.transform="rotate(180deg) translateX(50%)";
      setState("upscroll");
      
    }else{
      document.getElementById("main").style.transform="translate(0, 0) rotate(0deg)";
      document.getElementsByClassName("next")[0].style.transform="rotate(0deg) translateX(-50%)";
      setState("null");
    }
  }
  return (
    <>
      <DarkMode></DarkMode>
      <div onClick={scroll} className="next">
      </div>
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

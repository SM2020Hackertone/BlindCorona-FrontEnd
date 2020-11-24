import { BrowserRouter as Router, Switch, Route, withRouter } from "react-router-dom"
import Main from "./components/Main"
import Annyang from "annyang"
import "./App.scss"
import DarkMode from "./components/public/DarkMode"
function Stt(){
  if (Annyang) {
    var commands = {
      'hello': function() { alert('Hello world!'); }
    };
   
    // Add our commands to annyang
    Annyang.addCommands(commands);
   
    // Start listening.
    Annyang.start();
  }
}
function App() {
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

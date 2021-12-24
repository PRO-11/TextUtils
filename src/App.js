import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar';
import Textbar from './Components/Textbar';
import About from './Components/About'
import React,{useState} from 'react';
import Alert from './Components/Alert';
// import { Route } from 'react-router-dom';
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route,
//   Link
// } from "react-router-dom";
function App() {
  const [mode,setmode]=useState("light");
  const [alert,setalert]=useState(null);
 const showalert=(type,msg)=>{
     setalert({
       type:type,
       msg:msg
     })
     setTimeout(() => {
       setalert(null)
     }, 3000);
  }
  const changetoggle=()=>{
    if(mode==='light'){
       setmode('black');
       document.body.style.backgroundColor='#042743'
       showalert('success','Dark Mode has been enabled')
    }
       else{
       setmode('light')
       document.body.style.backgroundColor='white'
       showalert('success','Light Mode has been enabled')
       }
  }
  return (
    <>
    <Navbar title="TextUtils" mode={mode} Toggle={changetoggle}/>
     <Alert alert={alert}/>
     <div className="conatainer my-3">
     {/* <Switch>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/"> */}
          <Textbar title="Enter Text To Convert" mode={mode} showalert={showalert}/> 
          {/* </Route>
        </Switch> */}
        </div>
        </>
  );
}

export default App;

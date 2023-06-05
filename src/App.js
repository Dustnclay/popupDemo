import logo from './logo.svg';
import './App.css';
import { CorrectAnswerPopup } from './correct_answer-popup';
import { Popup1 } from './popup1';
import { Popup2 } from './popup2';
import { Popup4 } from './popup4';
import { Popup5 } from './popup5';
import './popup.scss'
import { useState } from 'react';

function App() {
  function anim1(e) {
    return 
  }

  let [viewPop1, setViewPop1] = useState(false)
  let [viewPop2, setViewPop2] = useState(false)
  let [viewPop3, setViewPop3] = useState(false)
  let [viewPop4, setViewPop4] = useState(false)
  let [viewPop5, setViewPop5] = useState(false)


  return (
    <div className="App">
      <h1>Animation Demo</h1>
      <div className="box">
        <button className="btn1" onClick={() => {setViewPop1(true)}}>Example 1</button>
        <button className="btn1" onClick={() => {setViewPop2(true)}}>Example 2</button>
        <button className="btn1" onClick={() => {setViewPop3(true)}}>Example 3</button>
        <button className="btn1" onClick={() => {setViewPop4(true)}}>Example 4</button>
        <button className="btn1" onClick={() => {setViewPop5(true)}}>Example 5</button>
        { viewPop1 && <CorrectAnswerPopup setViewPop1={setViewPop1}  />}
        { viewPop2 && <Popup1 setViewPop2={setViewPop2}  />}
        { viewPop3 && <Popup2 setViewPop3={setViewPop3}  />}
        { viewPop4 && <Popup4 setViewPop3={setViewPop4}  />}
        { viewPop5 && <Popup5 setViewPop5={setViewPop5}  />}
      </div>
    </div>
  );
}

export default App;

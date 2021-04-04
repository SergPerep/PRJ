//import logo from './logo.svg';
import { useState } from "react";
import './App.css';

function App() {
  const [curNumber, setCurNumber] = useState(0);
  const words = [
  {
    nl: "hoor",
    ru: "слышать"
  },
  {
    nl: "zeggen",
    ru: "говорить"
  },
  {
    nl: "lezen",
    ru: "читать"
  },
  {
    nl: "goed",
    ru: "хорошо"
  }
  ]
  console.log("Number: " + curNumber);
  const progressBar = words.map((x, index) => <li key={index}>{index === curNumber ? "1" : "0"}</li>);

  // Хэндленры
  function handleClickBack(){
    setCurNumber(curNumber - 1);
  }

  function handleClickNext(){
    setCurNumber(curNumber + 1);
  }

  // Рендер
  return (<>
    <div>{words[curNumber].nl}</div>
    <button onClick={handleClickBack} disabled={curNumber === 0}>Back</button>
    <button onClick={handleClickNext} disabled={curNumber === words.length - 1}>Next</button>
    <ul>
    {progressBar}
    </ul>
    </>
    );
  }

  export default App;

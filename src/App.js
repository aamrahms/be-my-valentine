import {useState, useEffect} from "react";
import './App.css';
import Yes from './Yes';

function App() {
  const [theySaidYes, didTheySayYes]= useState(false);
  const [noCount, setNoCount]= useState(0);
  // const yesButtonSize= noCount *20 +16;
  // const yesButtonHeight= yesButtonSize*4;
  const sayYes=()=>{
    didTheySayYes(true);
  }
  const sayWhat=()=>{
    setNoCount( noCount+1);
  }
  const phrases=[
    "",
    "Are you Sure?",
    "Really, sure?",
    "You are breaking my heart :(",
    "Its breaking into teeny tiny pieces.",
    "but, but, but dont do this to me!",
    "I am crying here!",
    "ok, if thats what you really want </3",
    "Last Chance!",
    "I will miss you!!",
    "I am walking awayyyy..."
  ]
  const gifs=[
    "https://i.pinimg.com/564x/fa/1b/8f/fa1b8f5fe6ff8b7c81e191225cc2b99e.jpg",
    "https://i.pinimg.com/originals/dd/60/2e/dd602e5a6d18e20041f4be40ebab3f82.gif",
    "https://i.pinimg.com/originals/07/38/95/073895e013e99eb9b1dff6874f120b77.gif",
    "https://i.pinimg.com/originals/3b/c4/6e/3bc46e8c8dfd0b62345e0a5ac4b41270.gif",
    "https://i.pinimg.com/originals/15/46/2e/15462ed447e25356837b32a7e22e538f.gif",
    "https://i.pinimg.com/originals/db/9a/31/db9a31068e5698b3affca6fed8b9b670.gif",
    "https://i.pinimg.com/originals/0d/8c/66/0d8c66adf9434bad72a680e7e53f9967.gif",
    "https://i.pinimg.com/originals/d9/5c/5f/d95c5f1fa927d9d0badd6e69bbea6062.gif",
    "https://i.pinimg.com/originals/93/1b/a2/931ba216c319766e5ba9673ca75b8d0e.gif",
    "https://i.pinimg.com/originals/87/6e/1b/876e1ba5fa09fe7b56827e25febc9a4a.gif",
    "https://i.pinimg.com/originals/3c/ad/fe/3cadfe5a36aff452143b23b334c2b774.gif"
    // "https://i.pinimg.com/originals/db/9a/31/db9a31068e5698b3affca6fed8b9b670.gif"
  ]


  function getNoButtonText(retType){
    if(retType==="phrases")
      return phrases[Math.min(noCount,phrases.length-1)];
    else return gifs[Math.min(noCount,phrases.length-1)]
  }
  return (
    <div className="App">
      {theySaidYes ?
      <Yes/>
      :
      <div>
        {/* <img alt="will-you-be-my-valentine" className="image" src="https://i.pinimg.com/564x/2c/87/83/2c878305a505d28d8d30651cb280e851.jpg"/> */}
        <h1> Will you be my Valentine? </h1>
        <img className="gif" src={getNoButtonText("gifs")}/>
        
        <h2> {getNoButtonText("phrases")}</h2>
        <button 
        className="button-56 yesButton" 
        name="yes" 
        // style={{fontSize: yesButtonSize, height: yesButtonHeight}}
        onClick={sayYes}>
          Yes!
        </button>
        
        <button 
        className="button-56 noButton" 
        name="no" 
        onClick={sayWhat}>
          No
        </button>
      </div>
      }

    </div>
  );
}

export default App;

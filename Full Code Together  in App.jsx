import React,{useState} from 'react';

function TextToSpeech() {
    const[text,setText]=useState('');
    const handleClick=()=>{
        
        const uttarance=new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(uttarance);
    
} ;

  

  return (
    <div>
     <h1>Text to speech generator</h1>
        <input type="text" placeholder="Enter your text here" value={text} onChange={(e)=>setText(e.target.value)}
            />
            
        <button onClick={handleClick}>Speak</button>
      </div>
      
  );
};

export default TextToSpeech;

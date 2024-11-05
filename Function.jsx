function TextToSpeech() {
    const[text,setText]=useState('');
    const handleClick=()=>{
        
        const uttarance=new SpeechSynthesisUtterance(text);
        window.speechSynthesis.speak(uttarance);
    
} ;

  

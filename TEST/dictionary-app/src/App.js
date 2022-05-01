
import axios from "axios";
import { React, useEffect, useState } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Definitions from"./components/Definitions/Definitions";

function App (){
  const [word, setWord] = useState (" "); // I made it empty to accept any words search by the users
  const [meanings, setMeanings] = useState([]); //useState contains the initial state. I'll use setMeanings function to change the state. meanings is the variable that'll store
  const dictionaryApi = async() =>{ // I made the function async because I'll be fetching the API given to me
    try {
      const data = await axios.get (
        `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);

        console.log(data);
        setMeanings(data.data)
    } catch (error) {
      console.log (error);
    }
  };

  console.log(meanings); 
 
  useEffect (() => { // useEffect, if empty, is called whenever the dependencies are rendered
    dictionaryApi ();
  }, [word]); 
  return (
    <div className ="App" style={{height: '100vh', backgroundColor: "#282c34", color: "white"}}> 
      <Header 
        word = {word}
        setWord = {setWord}
      />
      {meanings && (
      <Definitions word = {word} meanings ={meanings}/>
      )}
    </div>
  );
  
    

}




export default App;

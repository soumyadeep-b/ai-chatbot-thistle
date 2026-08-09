import { createContext, useState } from "react";
import { response } from "../config/gemini";

export const Context = createContext();
const ContextProvider =(props) =>{


  const [input, setInput] = useState("");
  const [recentPrompt, setRecentPrompt]= useState("");
  const [prevPrompts, setPrevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const[resultData, setResultData]= useState("");


 const newChat = ()=>{
  setLoading(false)
  setShowResult(false)
  setInput("")
 }



  const onSent = async (prompt) => {

    setResultData("")
    setLoading(true)
    setShowResult(true)
    let result;
    if(prompt !== undefined){
      result= await response(prompt)
      setRecentPrompt(prompt)
    }
    else{
      setPrevPrompts(prev=>[...prev, input])
      setRecentPrompt(input)
      result= await response(input)
    }

    setResultData(result)
    setLoading(false)
    setInput("")
  }
  

  const contextValue ={
    prevPrompts, setPrevPrompts, onSent, setRecentPrompt, recentPrompt, showResult, loading, resultData, input, setInput, newChat
  }

  return(
    <Context.Provider value={contextValue}>
      {props.children}
    </Context.Provider>
  )
}

export default ContextProvider
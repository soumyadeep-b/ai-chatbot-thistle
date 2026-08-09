import React, { useContext } from 'react'
import './Main.css'
import logo from '../../assets/logo.jpeg'
import { Send} from 'lucide-react'
import { Context } from '../../context/Context'
import ReactMarkdown from 'react-markdown'

const Main =() =>{

  const {onSent, recentPrompt, showResult, loading, resultData, setInput, input} = useContext(Context)

  return(
    <div className='main'>

      <div className='nav'>
        <p><span>Thistle AI</span></p>
        <img src={logo}/>
      </div>

      <div className="main-container">

        {!showResult
        ? <>
        <div className="greet">
          <p><span>Hello</span>, how can I help you today?</p>
          <br></br>
          <p>I am <span>Thistle</span>, your general purpose AI assistant, here for anything you need.</p>
        </div>
        </>
        :
        <div className="result">
          <div className="result-title">
            <p>{recentPrompt}</p>
          </div>
          <div className="result-data">
            <img src={logo}/>
            {loading
            ?<div className="loader"> 
               <hr />
               <hr />
            </div>
            :
            <div className="markdown-body"><ReactMarkdown>{resultData}</ReactMarkdown></div>
            }
            
          </div>
        </div>

        }
      


        <div className="main-bottom">

        <div className="searchbox">
          <input onChange={(e)=>setInput(e.target.value)} value={input} type="text" placeholder='Ask Thistle...'/>
          <Send onClick={()=> onSent()} className='send icon'/> 
        </div>

        <p className='bottom-info'>Thistle can make mistakes. Please verify important information.</p>
        <p className='bottom-info'>Made with <span className="heart">{'\u2764'}</span> by Soumyadeep Biswas. © 2026 Thistle AI. All rights reserved.</p>
      </div>
      </div>

    


    </div>
  )
}

export default Main
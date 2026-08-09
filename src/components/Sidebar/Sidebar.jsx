import React, {useContext, useState} from 'react'
import './Sidebar.css'
import { History,Plus, Menu, MessageCircle} from 'lucide-react'
import { Context } from '../../context/Context'

const Sidebar =() =>{

  const [extended, setExtended] = useState(false)
  const {onSent, prevPrompts, setRecentPrompt, newChat} = useContext(Context)


  const loadPrompt = async(prompt) =>{
    setRecentPrompt(prompt)
    await onSent(prompt)
  }



  return(
    <div className='sidebar'>

      <div className="top">
        <Menu onClick={()=> setExtended(prev=>!prev)}className='menu icon'/>
      

      <div onClick={()=>newChat()} className="newchat">
        <Plus className='plus icon'/>
        {extended?<p>New Chat</p>:null}
      </div>

      {extended?
      <div className="recent">
        <p className="recent-title">Recent</p>
        {prevPrompts.map((item,index)=>{
          return(
            <div key={index} onClick={()=> loadPrompt(item)} className='recent-entry'>
          <MessageCircle className="message icon"/>
          <p>{item.slice(0,18)}...</p>
        </div>
          )
        })}
        
      </div>
      :null}
      </div>

    </div>
  )
}

export default Sidebar
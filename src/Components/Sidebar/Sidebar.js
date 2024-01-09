import React from 'react'
import './Sidebar.css';
import logoGPT from '../../Assets/chatgpt.svg';
import plus from '../../Assets/add-30.png'
import msg from '../../Assets/message.svg'
import home from '../../Assets/home.svg'
import saved from '../../Assets/bookmark.svg'
import upgrade from '../../Assets/rocket.svg'

function Sidebar() {
  return (
      <div className='sideBar'>
        <div className='upperSide'>
          <div className='upperSideTop'><img src={logoGPT} alt='Logo' className='logo' /><span className='brand'>ChatGPT</span></div>
          <button className='midBtn'><img src={plus} alt='add chat' className='addBtn'/>New Chat</button>
          <div className='upperSideBottom'>
            <button className='query'><img src={msg} alt='query' className='queryimg'/>What is programming?</button>
            <button className='query'><img src={msg} alt='query' className='queryimg'/>How to use an API?</button>
            </div>
        </div>
        <div className='lowerSide'>
        <div className='listItems'><img src={home} alt='home' className='listItemsImg'/>Home</div>
        <div className='listItems'><img src={saved} alt='saved' className='listItemsImg'/>Saved</div>
        <div className='listItems'><img src={upgrade} alt='upgrade' className='listItemsImg'/>Upgrade to Pro</div>
        </div>
      </div>
  )
}

export default Sidebar;

import React from 'react'
import './Mainbar.css'
import send from '../../Assets/send.svg'
import userIcon from '../../Assets/user-icon.png'
import gptLogo from '../../Assets/chatgptLogo.svg'

function Mainbar() {
  return (
    <div className='mainBar'>
        <div className='chats'>
          <div className='chat'>
            <img src={userIcon} alt='' className='chatImg'/><p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Nunc id cursus metus aliquam eleifend mi. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Purus semper eget duis at tellus at urna condimentum. Eu consequat ac felis donec et odio. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Pellentesque habitant morbi tristique senectus et netus et malesuada. Porttitor leo a diam sollicitudin. Morbi tristique senectus et netus et malesuada fames ac. Malesuada fames ac turpis egestas maecenas pharetra convallis. Phasellus vestibulum lorem sed risus ultricies. Posuere lorem ipsum dolor sit. Tempus egestas sed sed risus pretium quam vulputate. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Cursus turpis massa tincidunt dui ut ornare lectus sit amet.</p>
          </div>
          <div className='chat bot'>
            <img src={gptLogo} alt='' className='chatImg'/><p className='txt'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Convallis tellus id interdum velit. Egestas quis ipsum suspendisse ultrices gravida dictum fusce ut placerat. Etiam dignissim diam quis enim lobortis scelerisque fermentum dui. Nunc id cursus metus aliquam eleifend mi. Accumsan sit amet nulla facilisi morbi tempus iaculis urna id. Purus semper eget duis at tellus at urna condimentum. Eu consequat ac felis donec et odio. Dictumst vestibulum rhoncus est pellentesque elit ullamcorper. Egestas quis ipsum suspendisse ultrices gravida dictum fusce. Pellentesque habitant morbi tristique senectus et netus et malesuada. Porttitor leo a diam sollicitudin. Morbi tristique senectus et netus et malesuada fames ac. Malesuada fames ac turpis egestas maecenas pharetra convallis. Phasellus vestibulum lorem sed risus ultricies. Posuere lorem ipsum dolor sit. Tempus egestas sed sed risus pretium quam vulputate. Fermentum et sollicitudin ac orci phasellus egestas tellus rutrum. Cursus turpis massa tincidunt dui ut ornare lectus sit amet.</p>
          </div>
        </div>

        <div className='chatFooter'>
          <div className='inp'>
            <input type='text' name='' id='' placeholder='send a message'/>
            <button className='send'><img src={send} alt='send'/></button>
          </div>
          <p>ChatGPT can make mistakes. Consider checking important information.</p>
        </div>
      </div>
  )
}

export default Mainbar;

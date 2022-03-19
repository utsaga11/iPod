import React,{ useState } from 'react';
import './App.css';
import Screen from './Screen';

function Controller() {
  const mainMenu = ['CoverFlow','Music','Games','Settings'];
  const activeMenu = mainMenu;
  const [activeScreen, setactiveScreen] = useState('');
  function handleScreenChange(scr) {
    setactiveScreen(scr);
  }

  return (
    
    <div >
    <div className='screen'>
       <Screen activeMenu={activeMenu} handleScreenChange={handleScreenChange} activeScreen={activeScreen}/>
    </div>
    <div className="Controller">
    <div className='cont'>
          <div className='con'></div>
          <div className='prev'> <img alt="backward" className="" src="https://cdn-icons-png.flaticon.com/128/318/318477.png"
              /> </div>
          <div className='forw'><img alt="forward" className="" src="https://cdn-icons-png.flaticon.com/128/318/318476.png"
              /></div>
          <div className='menu' onClick={() =>handleScreenChange("")}>
          <img alt="menu" className="" src="https://cdn-icons-png.flaticon.com/128/809/809564.png"
              />
          </div>
          <div className='next'>
          <img alt="next" className="" src="https://cdn-icons.flaticon.com/png/128/3172/premium/3172641.png?token=exp=1647270291~hmac=cb54ddf30c6502585da3ff5fa3c49c98"
              />
          </div>
     </div>
    </div>
    </div>
  );
}

export default Controller;
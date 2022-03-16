import './App.css';
import Menu from './Menu';
import Scr from './scr';
import CoverFlow from './coverflow';
import Music from './music';
import Games from './games';
import Settings from './settings'

function Controller() {
  const mainMenu = ['Cover Flow','Music','Games','Settings'];
  const music= ['All Songs','Artists','Fav Songs'];
  const activeMenu = mainMenu;

  return (
    
    <div >
    <div className='screen'>
       <Scr activeMenu={activeMenu}/>
    </div>
    <div className="Controller">
    <div className='cont'>
          <div className='con'></div>
          <div className='prev'> <img alt="backward" className="" src="https://cdn-icons-png.flaticon.com/128/318/318477.png"
              /> </div>
          <div className='forw'><img alt="forward" className="" src="https://cdn-icons-png.flaticon.com/128/318/318476.png"
              /></div>
          <div className='menu'>
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
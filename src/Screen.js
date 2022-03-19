import './App.css';
import Scr from './scr';
import CoverFlow from './coverflow';
import Music from './music';
import Games from './games';
import Settings from './settings'


function Screen(props) {
    function renderScreen() {
        if(props.activeScreen == 'CoverFlow'){
           return <CoverFlow/>
        }
        if(props.activeScreen == 'Music'){
            return <Music/>
         }
         if(props.activeScreen == 'Games'){
            return <Games/>
         }
         if(props.activeScreen == 'Settings'){
            return <Settings/>
         }
        return <Scr activeMenu={props.activeMenu}  handleScreenChange={props.handleScreenChange}/>
    }
  return ( 
       renderScreen()
    );
}

export default Screen;
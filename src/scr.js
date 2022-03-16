import './App.css';
import Menu from './Menu';

function scr(props) {
 
  return ( 
    <div className='scr'>
          <Menu items={props.activeMenu} />
       </div>
    );
}

export default scr;
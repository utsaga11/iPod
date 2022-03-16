import './App.css';

function Menu(props) {

  return (
    <div className="mainmenu">
    <h1>Ipod.js</h1>
    {props.items.map(item => <li className="listitem">{item}</li>)}
    </div>
    
  );
}

export default Menu;
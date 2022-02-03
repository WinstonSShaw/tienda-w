import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';
import ItemCount from './components/ItemCount/ItemCount';

//import axios from 'axios';



const blueColor = "blue";



function App() {
  return (
    <div className="App">

      
      <NavBar myColor={blueColor} />

      <ItemListContainer greeting="Bienvenido a Tiendas W" />

      <ItemCount stock={5} inicial ={1} />
      <ItemCount stock={0} inicial ={0} />
        
      
    </div>
  );
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />


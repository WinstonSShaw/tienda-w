import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';


const orangeColor = "orange";
const blueColor = "blue";
const redColor = "red";


function App() {
  return (
    <div className="App">

      
      <NavBar myColor={blueColor} />

      <ItemListContainer greeting="Bienvenido a Tiendas W" />
        
      
    </div>
  );
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />


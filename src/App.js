import './App.css';
import NavBar from './components/NavBar';


const orangeColor = "orange";
const blueColor = "blue";
const redColor = "red";


function App() {
  return (
    <div className="App">
      
        <NavBar myColor={blueColor} />


        
        <p>
          Bienvenido a Tiendas W
        </p>
        
      
    </div>
  );
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />


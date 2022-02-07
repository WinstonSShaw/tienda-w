import './App.css';


// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//COMPONENTS
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemList/ItemListContainer';

//VIEWS
import ItemDetailContainer from './VIEWS/ItemDetail/ItemDetailContainer';
import Home from './VIEWS/Home/Home';



const blueColor = "blue";



const App = () => {
  return (
    <Router>
      <div className="App">

      
        <NavBar myColor={blueColor} />

        <ItemListContainer greeting="Bienvenido a Tiendas W" />




        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />

        </Routes>
          

      </div>

    </Router>
    
  );
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />


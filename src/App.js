import './App.css';


// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//COMPONENTS
import NavBar from './components/NavBar/NavBar';


//VIEWS
import ItemDetailContainer from './VIEWS/ItemDetail/ItemDetailContainer';
import Home from './VIEWS/Home/Home';
import About from './VIEWS/About/About';



const blueColor = "blue";



const App = () => {
  return (
    <Router>
      <div className="App">

      
        <NavBar myColor={blueColor} />

        




        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/detail/:id' element={<ItemDetailContainer />} />
          <Route path='/about' element={<About />} />

        </Routes>
          

      </div>

    </Router>
    
  );
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />


import './App.css';


// REACT ROUTER DOM
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

//COMPONENTS
import NavBar from './components/NavBar/NavBar';


//VIEWS
import ItemDetailContainer from './VIEWS/ItemDetail/ItemDetailContainer';
import Home from './VIEWS/Home/Home';
import Categories from './VIEWS/Categories/Categories';
import Cart from './VIEWS/Cart/Cart';
import About from './VIEWS/About/About';

//HOC PROVIDER
import { CartProvider } from './Context/CartContext';



const blueColor = "blue";



const App = () => {
  return (
    <Router>
      <CartProvider>

      
        <div className="App">

        
          <NavBar myColor={blueColor} />

          




          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/categories/:category' element={<Categories />} />
            <Route path='/detail/:id' element={<ItemDetailContainer />} />
            <Route path='/cart' element={<Cart />} />
            <Route path='/about' element={<About />} />

          </Routes>
            

        </div>

      </CartProvider>
    </Router>
    
  );
}

export default App;

// <img src={logo} className="App-logo" alt="logo" />


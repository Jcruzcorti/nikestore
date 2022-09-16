import logo from './imgs/logona.png';
import './App.css';
import {BrowserRouter,Routes,Route, NavLink} from 'react-router-dom';
import  NavBar  from "./components/navBar/NavBar";
import ItemListContainer from './pages/itemListContainer/ItemListContainer';
import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer';
import Cart from './pages/cart/Cart';
import CartProvider from './context/CartContext';
import Footer from './components/footer/Footer';
// import LogoContextProvider from './context/LogoContext';


function App() {

  return (
    <div className="App" id="grilla">
        

     <CartProvider>  

        <BrowserRouter>
          <header className="App-header">
            <NavLink to="/"><img  src={logo} className="App-logo" alt="logo" /></NavLink>        
            <NavBar/>
          </header>

          <section className="App-section">
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="WELCOME TO NIKE STORE" color="#ffffff" fontSize="50px"/>}/>
              <Route path="/category/:categoryId" element={<ItemListContainer greeting="PRODUCT CATEGORY" color="#ffffff" fontSize="40px"/>}/>
              <Route path="/detail/:itemId" element={<ItemDetailContainer greeting="PRODUCT DETAIL" color="#ffffff" fontSize="40px"/>}/>
              <Route path="/:cart" element={<Cart />}/>
            </Routes>
          </section>

          <footer className="App-footer">
            <Footer/>
          </footer>

          </BrowserRouter> 
          

      </CartProvider>   
    </div>
  );
}

export default App;

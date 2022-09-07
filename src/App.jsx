import logo from './imgs/logona.png';
import './App.css';
import {BrowserRouter,Routes,Route, NavLink} from 'react-router-dom'
import  NavBar  from "./components/navBar/NavBar";
import ItemListContainer from './pages/itemListContainer/ItemListContainer'
import ItemDetailContainer from './pages/itemDetailContainer/ItemDetailContainer';


function App() {
  return (
    <div className="App" id="grilla">
      <BrowserRouter>

          
          <header className="App-header">
            <NavLink to="/"><img  src={logo} className="App-logo" alt="logo" /></NavLink>
            
            <NavBar/>

          </header>

          <section className="App-section">
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Welcome to Nike Store" color="#ffffff" fontSize="60px"/>}/>
              {/* <Route path="/" element={<ItemDetailContainer greeting="Products detail" color="#ffffff" fontSize="50px"/>}/> */}
              <Route />
            </Routes>
          </section>

          <footer className="App-footer">
            <p>aaaaa</p>

          </footer>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

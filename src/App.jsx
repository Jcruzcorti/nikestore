import logo from './imgs/logona.png';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  NavBar  from "./components/navBar/NavBar";
import ItemListContainer from './pages/itemListContainer/ItemListContainer'


function App() {
  return (
    <div className="App" id="grilla">
      <BrowserRouter>
        
          <header className="App-header">
            <img  src={logo} className="App-logo" alt="logo" />
            <NavBar/>

          </header>

          <section className="App-section">
            <Routes>
              <Route path="/" element={<ItemListContainer greeting="Welcome to Nike Store" color="#ffffff" fontSize="60px"/>}/>
              <Route></Route>
              <Route></Route>
            </Routes>
          </section>

          <footer className="App-footer">
            

          </footer>
        
      </BrowserRouter>
    </div>
  );
}

export default App;

import logo from './imgs/logona.png';
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import  NavBar  from "./components/navBar/NavBar";

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
              <Route></Route>
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

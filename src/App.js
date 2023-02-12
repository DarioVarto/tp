
import './App.css';
import { NavBar } from './components/NavBar/index';
import { Hero } from './components/Hero/index';
import { Servicios } from './components/Servicios/Servicios';
import { Portfolio } from './components/Portfolio';
import { Opiniones } from './components/Opiniones';

function App() {
  return (
    <div className="App">
      
      
      <NavBar/>
      <Hero/>
      <Servicios/>
      <Portfolio/>
      <Opiniones/>
   
    </div>
  );
}

export default App;

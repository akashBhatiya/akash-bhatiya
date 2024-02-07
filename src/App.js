import './App.scss';
import Navbar from './Components/Navbar/Navbar';
import Hero from './Components/Hero/Hero';
import About from './Components/About/About';
import Services from './Components/Services/Services';
import Capabilites from './Components/Capabilites/Capabilities';
import Contact from './Components/Contact/Contact';

function App() {
  return (
    <div className="App">
      <section><Navbar/><Hero/></section>
      <section><About/></section>
      <section><Services/></section>
      <section><Capabilites/></section>
      <section><Contact/></section>
    </div>
    
  );
}

export default App;

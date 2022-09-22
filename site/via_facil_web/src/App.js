import './App.css';
import Footer from './components/footer';
import HeroSection from './components/heroSection';
import NavBar from './components/navBar';
import Parcerias from './components/parcerias';
import Vantagens from './components/vantagens';

function App() {
  return (
    <div className="App">
      <NavBar/>
      <HeroSection/>
      <Vantagens/>
      <Parcerias/>
      <Footer/>
    </div>
  );
}

export default App;

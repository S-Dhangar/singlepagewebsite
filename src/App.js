import './App.css';
import './components/nav.css'
import Contact from './components/Contact';
// import About from './components/About';
import Products from './components/Products';
// import Navbar from './components/Navbar';
import Topbar from './components/Topbar';
import Footer from './components/Footer';
import First from './components/First';
function App() {
  return (
    <div>
    <Topbar/>
    <First/>
   <Products/>
    {/* <About/> */}
    <Contact/>
    <Footer/>
    </div>
  );
}

export default App;

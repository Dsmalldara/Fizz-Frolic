import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import CocktailDetails from './components/CocktailDetails';
import About from './components/About';
import Art from './components/Art';

function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  return (
   <main>
    <Navbar />
    <Hero/>
    <CocktailDetails/>
    <About/>
    <Art/>
    </main>
  )
}

export default App
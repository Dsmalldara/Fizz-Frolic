import { ScrollTrigger, SplitText } from 'gsap/all'; 
import { ScrollToPlugin } from 'gsap/ScrollToPlugin';
import gsap from 'gsap'; 
import Navbar from './components/Navbar'; 
import Hero from './components/Hero'; 
import CocktailDetails from './components/CocktailDetails'; 
import About from './components/About'; 
import Art from './components/Art'; 
import Menu from './components/Menu'; 
import Contact from './components/Contact';  

function App() {   
  gsap.registerPlugin(ScrollTrigger, SplitText, ScrollToPlugin);   
  
  return (    
    <main>     
      <Navbar />     
      <Hero/>     
      <section id="cocktails">
        <CocktailDetails/>
      </section>
      <section id="about">
        <About/>
      </section>
      <section id="work">
        <Art/>
      </section>
      <Menu/>
      <section id="contact">
        <Contact/>
      </section>
    </main>   
  ) 
}  

export default App
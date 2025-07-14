import {ScrollTrigger, SplitText} from 'gsap/all';
import gsap from 'gsap';
function App() {
  gsap.registerPlugin(ScrollTrigger, SplitText);
  return (
    <div className='flex-center h-[100vh]'>   
        GSAP
    </div>
  )
}

export default App
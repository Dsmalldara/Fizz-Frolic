import { navLinks } from "../utils"
import Logo from '../public/images/logo.png'
import { useGSAP} from "@gsap/react"
  import { ScrollTrigger } from "gsap/all"
import gsap from "gsap"

function Navbar() {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
        gsap.fromTo('nav',{
            backgroundColor:"transparent",
            repeat:-1
        },{
            backgroundColor:"#00000050",
            backgroundFilter:'blur(10px)',
            backdropFilter: 'blur(10px)',
            duration:1,
            ease:'power1.inOut',
            zIndex:30,
            
            scrollTrigger:{
                trigger:'nav',
                start:'bottom top',
            }
            
        })
    },[])
   
  return (
   <nav>
    <div>
        <a href="#home" className="flex items-center gap-2">
             <img src={Logo} alt="logo"/> 
            Velvet Pour</a>
        <ul>{
            navLinks.map((link)=>(
                <li key={link.id}>
                    <a href={link.id}>{link.title}</a>
                </li>
            ))
}
        </ul>
    </div>
   </nav>
  )
}

export default Navbar
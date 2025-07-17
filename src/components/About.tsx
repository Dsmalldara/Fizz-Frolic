import Abt1 from "../public/images/abt1.png"
import Abt2 from "../public/images/abt2.png"
import Abt5 from "../public/images/abt5.png"

import Abt4 from "../public/images/abt4.png"
import Abt3 from "../public/images/abt3.png"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { SplitText } from 'gsap/all'

function About() {
     
    useGSAP(()=>{
        const titleSplit = SplitText.create('#about h2, .badge-parent', {type: 'words'})
        const scrollTriggerTimeline = gsap.timeline({
            scrollTrigger:{
                trigger: '#about',
                start: 'top center',
            }
        })
        scrollTriggerTimeline.from(titleSplit.words, {
            yPercent: 100,
            opacity: 0,
            stagger: 0.02,
            duration: 1,
            ease: 'expo.out'
        }).from('.top-grid div, .bottom-grid div', {
            opacity: 0,
            stagger: 0.04,
            duration: 1,
            ease: 'power1.inOut'
        }, '-=0.5')
    },[])
  return (
    <div id="about">
        <div className="mb-16  md:px-0 px-5">
            <div className="content">
                <div className="md:col-span-8 badge-parent">
                   <div className="">
                     <button className=" rounded-full bg-white text-black px-4 py-2 text-sm font-medium mb-8">
                        Best Cocktails
                    </button>
                   </div>
                    <h2>
                    
                        Where every detail matters <span className="text-white">-</span> from muddle to garnish
                    </h2>
                </div>
                <div className="sub-content">
                    <p>
                        Every cocktail we serve is a reflection of our obsession with detail - from te first muddle to the final garnish. That care is what turns a somple drink into something truly memorable
                    </p>
                    <p className="md:text-3xl text-xl font-bold" >
                     <span>4.5</span>/5 
                    </p>
                   <p className="text-sm text-white-100 ">
                    More than +12000 customers
                   </p>
                </div>
            </div>
        </div>
         <div className="top-grid">
            <div className="md:col-span-3">
            <div className="noisy"/>
            <img src={Abt1} alt="grid-img-1" />
            </div>
             <div className="md:col-span-6">
            <div className="noisy"/>
            <img src={Abt2} alt="grid-img-1" />
            </div>
             <div className="md:col-span-3">
            <div className="noisy"/>
            <img src={Abt5} alt="grid-img-1" />
            </div>
         </div>
         <div className="bottom-grid">
             <div className="md:col-span-6">
            <div className="noisy"/>
            <img src={Abt3} alt="grid-img-1" />
            </div>
             <div className="md:col-span-6">
            <div className="noisy"/>
            <img src={Abt4} alt="grid-img-1" />
            </div>
             </div>
    </div>
  )
}

export default About
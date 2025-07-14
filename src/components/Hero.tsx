import leftLeaf from '../public/images/hero-left-leaf.png'
import rightLeaf from '../public/images/hero-right-leaf.png'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
function Hero() {
  useGSAP(()=>{
      gsap.registerPlugin(ScrollTrigger)
      const heroSplit= new SplitText('.title',{type: 'chars, words'}) 
      const paragraphSplit = new SplitText('.subtitle', {type: 'lines'})

      heroSplit.chars.forEach((char)=>char.classList.add("text-gradient"))
      gsap.fromTo(heroSplit.chars,{
        yPercent:100,
        stagger:0.06,
        opacity:0,
      },{
        opacity:1,
        yPercent:0,
           ease:'expo.out',
        stagger:0.06,
         duration:1.8,
       
      })
      gsap.from(paragraphSplit.lines,{
        opacity:0,
        yPercent:100,
        duration:1.8,
        ease:'expo.out',
        stagger:0.06,
        delay:1
      })
      gsap.timeline({
        scrollTrigger:{
          trigger:"#hero",
          
        }
      })
  },[])
  return (
    <>
    <section id='hero' className='noisy '>
    <h1 className='title z-20 '>
        FIZZ - FROLIC
    </h1>
    <img  src={leftLeaf} alt="left-leaf" className='left-leaf'/>
     <img  src={rightLeaf} alt="left-leaf" className='right-leaf'/>
     <div className='body'>
<div className='content'>
    <div className='space-y- hidden md:block'>
      <p >
        Cool. Crisp. Classic.
      </p>
      <p className='subtitle'>
        Sip the Spirit <br /> of Summer
      </p>
    </div>
    <div className='view-cocktails'>
    <p className='subtitle text-base'>
    Every cocktail on our menu is a blend of premium ingredients,creative flair, and timeless recipes - designed to delight your senses
    </p>
    <a href="#cocktails" className='btn'>View Cocktails</a>
    </div>
</div>
     </div>
    </section>
    </>
  )
}

export default Hero
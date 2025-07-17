import leftLeaf from '../public/images/hero-left-leaf.png'
import rightLeaf from '../public/images/hero-right-leaf.png'
import input from '../public/videos/input.mp4'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useRef } from 'react'
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/all"


function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useMediaQuery({maxWidth:767})

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

   const startValue = isMobile ? "top 50%" : "center 60%";
	const endValue = isMobile ? "120% top" : "bottom top";
	
	const tl = gsap.timeline({
	 scrollTrigger: {
		trigger: "video",
		start: startValue,
		end: endValue,
		scrub: true,
		pin: true,
	 },
	});
	
if(videoRef.current) {
  	videoRef.current.onloadedmetadata = () => {
  if (videoRef.current) {
    	 tl.to(videoRef.current, {
		currentTime: videoRef.current.duration,
	 });
  }}}
 }, []);
  return (
    <>
      <section id='hero' className='noisy '>
        <h1 className='title z-20 '>
          FIZZ - FROLIC
        </h1>
        <img src={leftLeaf} alt="left-leaf" className='left-leaf'/>
        <img src={rightLeaf} alt="right-leaf" className='right-leaf'/>
        <div className='body'>
          <div className='content'>
            <div className='space-y- hidden md:block'>
              <p>
                Cool. Crisp. Classic.
              </p>
              <p className='subtitle'>
                Sip the Spirit <br /> of Summer
              </p>
            </div>
            <div className='view-cocktails'>
              <p className='subtitle text-base'>
                Every cocktail on our menu is a blend of premium ingredients, creative flair, and timeless recipes - designed to delight your senses
              </p>
              <a href="#cocktails" className='btn'>View Cocktails</a>
            </div>
          </div>
        </div>
      </section>
       
	 <div className="video absolute inset-0">
		<video
		 ref={videoRef}
		 muted
		 playsInline
		 preload="auto"
		 src={input}
		/>
	 </div>
    </>
  )
}
export default Hero


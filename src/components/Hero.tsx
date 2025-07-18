import leftLeaf from '/images/hero-left-leaf.png'
import rightLeaf from '/images/hero-right-leaf.png'
import input from '/videos/input.mp4'
import { useGSAP } from '@gsap/react'
import { SplitText } from 'gsap/all'
import gsap from 'gsap'
import { useEffect, useRef } from 'react'
import { useMediaQuery } from "react-responsive";
import { ScrollTrigger } from "gsap/all"


function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null)
  const isMobile = useMediaQuery({maxWidth:767})

  useEffect(() => {
 if(isMobile){
   const playVideo = () => videoRef.current?.play(); // This function plays the video
  
  // These lines automatically set up the listeners
  document.addEventListener('touchstart', playVideo, {once: true});
  document.addEventListener('click', playVideo, {once: true});
  
  // Cleanup when component unmounts
  return () => {
    document.removeEventListener('touchstart', playVideo);
    document.removeEventListener('click', playVideo);
  };
 }
}, []);
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
                Experience the art of cocktail making with our signature drinks crafted to perfection
              </p>
            </div>
            <div className='view-cocktails'>
              <p className='subtitle text-base'>
                Discover our signature cocktails, crafted with the finest ingredients and a touch of summer magic.
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
     autoPlay
     loop
		 playsInline
		 preload="auto"
		 src={input}
		/>
	 </div>
    </>
  )
}
export default Hero


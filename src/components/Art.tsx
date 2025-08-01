import { featureLists, goodLists } from "../utils"
import check from "/images/check.png"
import underImg from "/images/under-img.jpg"
import { useMediaQuery } from "react-responsive"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
function Art() {
       const isMobile = useMediaQuery({ maxWidth: 767 });
 
 useGSAP(() => {
	const start = isMobile ? 'top 20%' : 'top -30%';
	
	const maskTimeline = gsap.timeline({
	 scrollTrigger: {
		trigger: '#art',
		start,
		end: 'bottom center',
		scrub: 1.5,
		pin: true
	 }
	})
       maskTimeline
	 .to('.will-fade', { opacity: 0, stagger: 0.2, ease: 'power1.inOut', })
	 .to('.masked-img', { scale: 1.3, maskPosition: 'center', maskSize: '400%', duration: 1, ease: 'power1.inOut '})
	 .to('#masked-content', { opacity: 1, duration: 1, ease: 'power1.inOut'})
    })
  return (
   <div id="art">
	 <div className="container mx-auto h-full pt-20">
		<h2 className="will-fade">The ART</h2>
		
		<div className="content">
		 <ul className="space-y-4 will-fade">
			{goodLists.map((feature, index) => (
			 <li key={index} className="flex items-center gap-2">
				<img src={check} alt="check" />
				<p>{feature}</p>
			 </li>
			))}
		 </ul>
		 
		 <div className="cocktail-img">
			<img
				src={underImg}
				alt="cocktail"
				className="abs-center masked-img size-full object-contain"
			/>
		 </div>
		 </div>
		 <ul className="space-y-4 will-fade">
			{featureLists.map((feature, index) => (
			 <li key={index} className="flex items-center justify-start gap-2">
				<img src={check} alt="check" />
				<p className="md:w-fit w-60">{feature}</p>
			 </li>
			))}
		 </ul>
		
		
		<div className="masked-container ">
		 <h2 className="will-fade">Sip-Worthy Perfection</h2>
		 <div id="masked-content" className="" >
			<h3 >Made with Craft, Poured with Passion</h3>
			<p>
				At Fizz Frolic, we believe in the art of cocktail making. Each drink is a masterpiece, crafted with the finest ingredients and a touch of creativity.
			</p>
		 </div>
		</div>
	 </div>
	</div>
  )
}

export default Art

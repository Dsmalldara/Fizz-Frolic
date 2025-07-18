
import { useRef, useState } from "react"
import leftLeaf from "/images/slider-left-leaf.png"
import rightLeaf from "/images/slider-right-leaf.png"
import { sliderLists } from "../utils"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
function Menu() {
    const [currentIndex, setCurrentIndex] = useState(0)
    const containerRef = useRef<HTMLDivElement>(null)
    const totalCocktails = sliderLists.length
    const slideValue =(index:number)=>{
        const newIndex = (index + totalCocktails) % totalCocktails
        setCurrentIndex(newIndex)
    }
    const getCocktail = (indexOffset:number)=>{
        return sliderLists[(currentIndex + indexOffset + totalCocktails) % totalCocktails]
    }
    const currentCocktail = getCocktail(0)
    const prevCocktail = getCocktail(-1)
    const nextCocktail = getCocktail(1)
     useGSAP(() => {
	gsap.fromTo('#title', { opacity: 0 }, { opacity: 1, duration: 1 });
	gsap.fromTo('.cocktail img', { opacity: 0, xPercent: -100 }, {
	 xPercent: 0, opacity: 1, duration: 1, ease: 'power1.inOut'
	})
	gsap.fromTo('.details h2', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
	gsap.fromTo('.details p', { yPercent: 100, opacity: 0 }, {
	 yPercent: 0, opacity: 100, ease: 'power1.inOut'
	})
 }, [currentIndex]);
  return (
    <section id='menu' aria-labelledby='menu-heading'>
      <img src={leftLeaf} alt="left-leaf" id="m-left-leaf"/>
      <img src={rightLeaf} alt="right-leaf" id="m-right-leaf"/>
      <h2  id="menu-heading" className="sr-only">
        Cocktail Menu
      </h2>
      <nav className="cocktail-tabs" aria-label="Cocktail Navigation">
        {
            sliderLists.map((list, index)=>{
              
                  const isActive = index === currentIndex
                  return (
                    <button key={index} className={`${isActive ? "border-white" : "text-white/50 border-white/50" }  `} onClick={()=>slideValue(index)}>
                        {list.name}
                    </button>
                  )
            })
        }
      </nav>
     <div className="content md:h-[60vh]">
		<div className="arrows">
		 <button className="text-left" onClick={() => slideValue(currentIndex - 1)}>
			<span>{prevCocktail.name}</span>
			<img src="/images/right-arrow.png" alt="right-arrow" aria-hidden="true" />
		 </button>
		 
		 <button className="text-left" onClick={() => slideValue(currentIndex + 1)}>
			<span>{nextCocktail.name}</span>
			<img src="/images/left-arrow.png" alt="left-arrow" aria-hidden="true" />
		 </button>
		</div>
		
		<div className="cocktail">
		 <img src={currentCocktail.image} className="object-contain" alt="cocktail"/>
		</div>
		
		<div className="recipe">
		 <div
      ref={containerRef} className="info">
			<p>Recipe for:</p>
			<p id="title">{currentCocktail.name}</p>
		 </div>
		 
		 <div className="details">
			<h2>{currentCocktail.title}</h2>
			<p>{currentCocktail.description}</p>
		 </div>
		</div>
	 </div>
    </section>
  )
}

export default Menu

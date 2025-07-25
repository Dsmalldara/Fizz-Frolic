import { useGSAP } from "@gsap/react"
import cocktailleftleaf from "/images/cocktail-left-leaf.png"
import cocktailrightleaf from "/images/cocktail-right-leaf.png"
import { cocktailLists, mockTailLists } from "../utils"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

function CocktailDetails() {
    gsap.registerPlugin(ScrollTrigger)
    useGSAP(()=>{
          gsap.timeline({
        scrollTrigger:{
            trigger:'#cocktails',
            start : 'top 30%',
            end:"bottom 80%",
            scrub:true
        }
    }).from('#c-left-leaf',{
        x:-100,
        y:100
    })  
    .from('#c-right-leaf',{
          x:100,
        y:100
    }
    )
    })
  return (
    <section id="cocktails" className="noisy">
        <img src={cocktailleftleaf} alt="l-leaf" id="c-left-leaf" />
        <img src={cocktailrightleaf} alt="r-leaf" id="c-right-leaf" />
        <div className="list">
            <div className="popular">
                <h2>
                    Most popular cocktails:
                </h2>
                <ul>
                    {cocktailLists.map(({name, country, detail, price})=>(
                        <li key={name}>
                            <div className="md:me-28">
                            <h3>
                                {name}
                            </h3>
                            <p>{country} | {detail}</p>
                            </div>
                            <span>
                                - {price}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
            <div className="loved">
                <h2>
                    Our mocktails:
                </h2>
                <ul>
                    {mockTailLists.map(({name, country, detail, price})=>(
                        <li key={name}>
                            <div className="me-28">
                            <h3>
                                {name}
                            </h3>
                            <p>{country} | {detail}</p>
                            </div>
                            <span>
                                - {price}
                            </span>
                        </li>
                    ))}
                </ul>
            </div>
        </div>

    </section>
  )
}

export default CocktailDetails
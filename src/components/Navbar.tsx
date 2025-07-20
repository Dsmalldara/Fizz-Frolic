import { navLinks } from "../utils"
import Logo from '/images/logo.png'
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { ScrollToPlugin } from 'gsap/ScrollToPlugin'
import gsap from "gsap"

function Navbar() {
    gsap.registerPlugin(ScrollTrigger, ScrollToPlugin)
    
    useGSAP(() => {
        gsap.fromTo('nav', {
            backgroundColor: "transparent",
            repeat: -1
        }, {
            backgroundColor: "#00000050",
            backgroundFilter: 'blur(10px)',
            backdropFilter: 'blur(10px)',
            duration: 1,
            ease: 'power1.inOut',
            zIndex: 30,
            scrollTrigger: {
                trigger: 'nav',
                start: 'bottom top',
            }
        })
    }, [])

    const handleScrollTo = (id:string) => {
        const element = document.getElementById(id);
        if (element) {
            gsap.to(window, {
                duration: 0.5,
                scrollTo: {
                    y: element,
                    offsetY: 80 // Adjust based on your navbar height
                },
                ease: "power2.out"
            });
        }
    };

    const handleHomeClick = (e:React.FormEvent) => {
        e.preventDefault();
        gsap.to(window, { 
            duration: 1, 
            scrollTo: { y: 0 }, 
            ease: "power2.out" 
        });
    };

    return (
        <nav>
            <div>
                <a href="#home" className="flex items-center gap-2 md:pl-4" onClick={handleHomeClick}>
                    <img src={Logo} alt="logo" /> 
                    Fizz Frolic
                </a>
                <ul className="px-6">
                    {navLinks.map((link) => (
                        <li key={link.id}>
                            <a 
                                href={`#${link.id}`}
                                onClick={(e) => {
                                    e.preventDefault();
                                    handleScrollTo(link.id);
                                }}
                            >
                                {link.title}
                            </a>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default Navbar
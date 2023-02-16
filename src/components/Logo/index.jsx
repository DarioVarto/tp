import React from "react"
import './Logo.css'
import { easeIn, easeInOut, motion } from "framer-motion"

const Logo = ()=>{

const pathVariants={
    hidden:{opacity:0.8,
        
    pathLength:0,
    },
    visible:{
        opacity:1,
            pathLength:1,
        transition:{
            duration:2,
                    
                    ease:easeIn}}
}
const svgVariants={
    hidden:{opacity:1},
    visible:{opacity:1,
    transition:{duration:2,delay:2}
},
}


    return(
     
                <motion.svg className="infinito" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 16 16"
                    variants={svgVariants}
                    initial='hidden'
                    animate='visible'
                >
    
  <motion.path d="M5.68 5.792 7.345 7.75 5.681 9.708a2.75 2.75 0 1 1 0-3.916ZM8 6.978 6.416 5.113l-.014-.015a3.75 3.75 0 1 0 0 5.304l.014-.015L8 8.522l1.584 1.865.014.015a3.75 3.75 0 1 0 0-5.304l-.014.015L8 6.978Zm.656.772 1.663-1.958a2.75 2.75 0 1 1 0 3.916L8.656 7.75Z"
  variants={pathVariants}
  initial='hidden'
  animate='visible'/>
</motion.svg>


    )
}


export {Logo}
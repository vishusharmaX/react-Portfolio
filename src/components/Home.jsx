import React, { useRef } from 'react'
import {animate, motion} from 'framer-motion'
import Typewriter from 'typewriter-effect'
import {BsArrowUpRight, BsChevronDown} from 'react-icons/bs'
import me from '../assets/me.png'

const Home = ({ratio}) => {

    const clientCount = useRef(null);
    const ProjectCount = useRef(null);

    const animationClientCount =() =>{
        animate(0,10,{
            duration : 2,
            onUpdate : (v)=>(clientCount.current.textContent =v.toFixed())
        })
    }
    const animationProjectCount =() =>{
        animate(0,20,{
            duration : 2,
            onUpdate : (v)=>(ProjectCount.current.textContent =v.toFixed())
        })
    }
    const animations ={
        h1: {
            initial:{
                x: '-100%',
                opacity:0,
            },
            whileInView :{
                x:'0',
                opacity:1
            }

        },
        button: {
            initial:{
                y: '-100%',
                opacity:0,
            },
            whileInView :{
                y:'0',
                opacity:1
            }
        },
    }
  return (
    <div id='home'>
        <section>
            <div>
                <motion.h1 {...animations.h1}>
                    Hi, I Am <br/> Vishwajeet Sharma
                </motion.h1>
                <Typewriter 
                options={{
                 strings: ["A Web Developer", "A Andriod Developer(ReactNative)", "Core C++Programmer "],
                 autoStart: true,
                 loop: true,
                 wrapperClassName: "typewriterpara",
               }}
            />
            <div>
            <a href="mailto:sharmavishwajeet04@gmail.com">
            Hire Me
        </a>
         <a href="#work">
          Project <BsArrowUpRight/>
        </a>
            </div>

               <article>
               <p>
                +
                {
                    ratio< 4 && <motion.span whileInView={animationClientCount} ref={clientCount}></motion.span>
                }
                    </p>
                    <span>Cleints WorldWide</span>
               </article>
               <aside>
               <article>
                    <p>
                    +
                    {
                        ratio < 4 && <motion.span ref={ProjectCount} whileInView={animationProjectCount}></motion.span>
                    }
                    </p>    
                    <span>Projects Done</span>
               </article>
               <article data-special>
                    <p>
                    Contact
                    </p>
                    <span>sharmavishwajeet04@gmail.com</span>
               </article>
               </aside>
            </div>
        </section>
               <section>
                <img src={me} alt="Vishwajeet" />
               </section>
                <BsChevronDown/>
    </div>
  )
}

export default Home;
import Logo from "../assets/1.png"
import { motion as Motion } from "framer-motion"
import { slideUp } from '../utils/animation'

const Hero = () => {
  return (
    <>
        <div className="container">
            <div className='grid grid-cols-1 md:grid-cols-2 min-h-[600px]'>
                {/* text section */}
                <div className='space-y-5 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-24 md:py-0 md:px-0 md:items-start'>
                    <Motion.h1 
                        variants={slideUp(0.2)}
                        initial= "initial"
                        animate = "animate"
                        className='text-4xl xl:text-5xl font-bold'>Unlock a Passion, Side Hustle, or New {" "}<span className='text-gray-500 underline'>Profession</span>
                    </Motion.h1>
                    <Motion.p
                        variants={slideUp(0.4)}
                        initial= "initial"
                        animate = "animate"
                    >
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        Dignissimos eligendi mollitia{" "}
                    </Motion.p>
                    <Motion.button 
                        variants={slideUp(0.6)}
                        initial= "initial"
                        animate = "animate"
                        className='primary-btn bg-gray-900 hover:bg-primary duration-300'>Explore More</Motion.button>
                </div>
                {/* hero image */}
                <div className='flex justify-center items-center'>
                    <Motion.img 
                        initial = {{
                            opacity: 0,
                            x: 100,
                        }}
                        animate = {{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.5, delay: 1.0 }}
                        src={Logo} alt='' className='w-[80%] md:w-[500px] xl:w-[600px]' />
                </div>
            </div>
        </div>  
    </>
  )
}

export default Hero
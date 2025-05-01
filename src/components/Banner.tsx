import BannerImg from "../assets/3.png";
import { motion as Motion } from "framer-motion";
import { slideUp } from "../utils/animation";

const Banner = () => {
  return (
    <>
        <div className="container py-20">
            <div className="grid grid-cols-1 md:grid-cols-2 min-h-[700px] md:min-h-[600px]">
                <div className="space-y-8 flex flex-col justify-center items-center text-center md:text-left py-20 px-10 md:pr-10 md:py-0 md:px-0 md:items-start">
                    <Motion.h1
                        variants={slideUp(0.2)}
                        initial="initial"
                        animate= "animate" 
                        className="text-4xl xl:text-5xl font-semibold text-black/80">
                        Design is not what it looks like and feels like. Design is how{" "}
                        <br />
                        <span className="text-gray-400 underline">It Works</span>
                    </Motion.h1>
                    <Motion.button
                        variants={slideUp(0.4)}
                        initial="initial"
                        animate= "animate" 
                        className="primary-btn hover:bg-black text-black hover:text-white duration-300">
                        More News
                    </Motion.button>
                    <div className="flex gap-3">
                        <Motion.div
                            variants={slideUp(0.6)}
                            initial="initial"
                            animate= "animate" 
                            className="space-y-2"
                        >
                            <p className="font-semibold text-lg">Design Tools</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                        </Motion.div>
                        <Motion.div
                            variants={slideUp(0.6)}
                            initial="initial"
                            animate= "animate" 
                            className="space-y-2"
                        >
                            <p className="font-semibold text-lg">Design Tools</p>
                            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit</p>
                        </Motion.div>
                    </div>
                </div>
                <div className="flex justify-center items-center">
                    <Motion.img
                        initial={{
                            opacity: 0,
                            x: 100,
                          }}
                          whileInView={{ opacity: 1, x: 0 }}
                          transition={{ duration: 0.5, delay: 0.5 }}
                        src={BannerImg} alt="" className="w-[90%] md:w-[550px] xl:w-[600px] md:!scale-125"/>
                </div>
            </div>
        </div>
    </>
  )
}

export default Banner
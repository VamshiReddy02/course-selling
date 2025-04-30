import ServiceImg from "../assets/2.png";
import { motion as Motion } from "framer-motion";

const Services = () => {
  return (
    <>
        <div className='container'>
            {/* header section */}
            <Motion.div
                initial ={{ opacity: 0 }}
                whileInView={{ opacity: 1 }} 
                className='py-12 flex justify-between items-center'>
                <h1 className='text-4xl xl:text-5xl font-bold max-w-[550px]'>Classes to Spark Your {" "}
                    <span className='text-gray-400 underline'>
                        Creativity
                    </span>
                </h1>
                <p>
                    Notified to spark your <br></br>
                    <span className='text-gray-400 underline'>Balance</span>
                </p>
            </Motion.div>
            {/* Card section */}
            <div className='grid grid-cols-1 sm:grid-cols-2 gap-8'>
                <Motion.div
                    initial= {{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.2 }}
                >
                    <img src={ServiceImg} alt='' className='w-[300px] mx-auto md:max-w-[500px]' />
                </Motion.div>
                <Motion.div 
                    initial= {{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.4 }}
                    className='max-w-[300px] mx-auto space-y-4'>
                    <img src={ServiceImg} alt='' className='w-14' />
                    <p className='uppercase font-semibold text-xl'>Learn by doing</p>
                    <p className='text-gray-500 pl-6 border-l-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia
                        asperiores magnam? Assumenda perferendis optio dicta natus nobis,
                        cupiditate eveniet libero ratione quam iusto!
                    </p>
                </Motion.div>
                <Motion.div 
                    initial= {{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.6 }}
                    className='max-w-[300px] mx-auto space-y-4'>
                    <img src={ServiceImg} alt='' className='w-14' />
                    <p className='uppercase font-semibold text-xl'>Learn by doing</p>
                    <p className='text-gray-500 pl-6 border-l-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia
                        asperiores magnam? Assumenda perferendis optio dicta natus nobis,
                        cupiditate eveniet libero ratione quam iusto!
                    </p>
                </Motion.div>
                <Motion.div 
                    initial= {{ opacity: 0, x: 100 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.5, delay: 0.8 }}
                    className='max-w-[300px] mx-auto space-y-4'>
                    <img src={ServiceImg} alt='' className='w-14' />
                    <p className='uppercase font-semibold text-xl'>Learn by doing</p>
                    <p className='text-gray-500 pl-6 border-l-2'>
                        Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                        Voluptates vel eaque ea dolorem voluptate, nesciunt mollitia
                        asperiores magnam? Assumenda perferendis optio dicta natus nobis,
                        cupiditate eveniet libero ratione quam iusto!
                    </p>
                </Motion.div>
            </div>
        </div>
    </>
  )
}

export default Services
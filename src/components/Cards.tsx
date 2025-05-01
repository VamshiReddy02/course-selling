
import { CardData } from "../data/MockData";
const Cards = () => {
  return (
    <div className="bg-gray-50">
        <div className="container py-14">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
            {CardData.map((card, index) => (
                <div key={index} className="bg-white rounded-xl shadow-xl py-10 px-5 text-center flex flex-col justify-center items-center gap-5 md:max-w-[280px] mx-auto">
                    <img src={card.img} alt="" className="w-16 h-16 rounded-full object-contain p-3 bg-black" />
                    <p className="text-xl font-semibold">{card.title}</p>
                    <p className="text-sm text-black/80 leading-relaxed">{card.description}</p>
                    <a href={card.link}>Learn More</a>
                </div>
            ))}
        </div>
        </div>
    </div>
  )
}

export default Cards
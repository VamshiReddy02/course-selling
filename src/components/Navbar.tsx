import Logo from "../assets/1.png"
import { NavbarData } from "../data/MockData"

const Navbar = () => {
  return (
    <>
    <div className="py-8 container flex justify-between items-center">
        {/* logo Section */}
        <div className="flex items-center gap-1">
            <img src={Logo} alt="" className="w-[70px]" />
            <p className="font-bold text-2xl">HUSTLE</p>
        </div>
        {/* link Section */}
        <div className="hidden md:block">
            <ul className="flex gap-3 xl:gap-7">
                {
                    NavbarData.map((link) => {
                        return (
                            <li key={link.id}>
                                <a className="hover:text-[#fdcd2d] uppercase text-sm md:text-base" href={link.link}>{link.title}</a>
                            </li>
                        );
                    })
                }
            </ul>
        </div>
        {/* Button section */}
        <div>
            <button className="primary-btn">Request for Quotes</button>
        </div>
    </div>

    </>
  )
}

export default Navbar
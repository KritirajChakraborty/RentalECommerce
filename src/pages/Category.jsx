import { Link } from "react-router-dom"
import image1 from '/Category/image3.jpg'
import image2 from '/Category/image2.jpg'
import image3 from '/Category/image1.jpg'
import image4 from '/Category/image4.jpg'
import image5 from '/Category/image5.jpg'
const brandLogo = [
    {id: 1,path: '/samsung.png'},
    {id: 2,path: '/haier.png'},
    {id: 3,path: '/panasonic.png'},
    {id: 4,path: '/prestige.png'},
    {id: 5,path: '/sony.png'},

]

export default function Category(){
    return (
        <div className="max-w-screen-2xl mx-auto md:px-28 px-4 py-28">
            {/* brand logos */}
            <div className="m-2 px-6 py-10">
                <ul className="flex flex-col md:flex-row items-center justify-between">
                    {brandLogo.map((item) => (
                        <li key={item.id}><img src={item.path} alt="Logo" className="w-45 h-20 m-1 p-1" /></li>
                    ))}
                </ul>
            </div>

            {/* grid items */}
            <div className="mt-8 flex flex-col md:flex-row items-center gap-6">
                <p className="bg-black text-white text-center inline-flex font-semibold uppercase md:-rotate-90 px-1 py-2 rounded-sm">Explore new and popular products</p>
                 <div className="md:w-1/2">
                    <Link to='/'><img src={image1} alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                 </div>
                 <div className="md:w-1/2">
                 <div className="grid grid-cols-2 gap-4">
                 <Link to='/'><img src={image2} alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                 <Link to='/'><img src={image3} alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                 <Link to='/'><img src={image4} alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                 <Link to='/'><img src={image5} alt="" className="w-full hover:scale-105 transition-all duration-200" /></Link>
                 </div>
                 </div>
            </div>

        </div>
    )
}
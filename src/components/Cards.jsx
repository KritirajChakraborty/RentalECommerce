import { Link } from "react-router-dom"
export default function Cards({products}){
    return ( 
        <div className="mt-8 md:px-28 px-4 py-8">
           <ul className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
            {products.map((item) => (
                <li key ={item.id} className="hover:scale-105 transition-all duration-300 h-full">
                    <Link to={`/shop/${item.id}`}>
                    <img src={item.image} alt="" className="lg:h-[256px] lg:w-[256px] " />
                    <p className="font-primary text-Black font-semibold">{item.title}</p>
                    <p>₹{item.price}</p>
                </Link>
                </li>
            ))}
           </ul>
        </div>
    )
}
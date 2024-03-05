import { FaBars, FaSearch, FaShoppingBag, FaTimes, FaUser } from "react-icons/fa";
import { Link } from "react-router-dom";
import { useState } from "react";

const navItems = [
    {id: 1, title: 'Electronics', path: '/shop'},
    {id: 2, title: 'Refrigerator', path: '/shop'},
    {id: 3, title: 'Sofa', path: '/shop'},
    {id: 4, title: 'AC', path: '/shop'},
    {id: 5, title: 'Furniture', path: '/shop'},

]


const Navbar = () => {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    function handleClick() {
        setMobileMenuOpen((prevState) => !prevState)
    }
  return (
    <header className="max-w-screen-2xl mx-auto xl:px-28 px-4 absolute top-0 left-0 right-0">
        <nav className="flex justify-between container sm:py-4 pt-6 pb-3">
        <FaSearch className="text-Black w-6 h-6 cursor-pointer hidden md:block" />
        <a href="/"><h1 className="font-primary text-3xl font-bold sm:text-xl">RentExchange</h1></a>

        {/* for large devices account and shopping btns */}
        <div className="text-lg text-Black sm:flex items-center gap-4 hidden">
           <a href="/" className="flex items-center gap-2"><FaUser/> Account</a>
           <a href="/" className="flex items-center gap-2"><FaShoppingBag/> Shopping</a>
        </div>

        {/* for mobile devices */}
        <div className="sm:hidden">
            <button className="border-none" onClick={handleClick}>{ mobileMenuOpen ? <FaTimes className="w-6 h-6 text-Black"/> :<FaBars className="w-6 h-6 text-Black"/>}</button>
        </div>

        </nav>

        <hr />

        <div className="pt-4">
            <ul className="lg:flex items-center justify-between gap-4 py-4 hidden">
                {navItems.map((item) => (
                    <li key={item.id} className="text-lg text-Black font-primary hover:text-orange-500"><Link to={item.path}>{item.title}</Link></li>
                ))}
            </ul>
        </div>
        
        {/* for mobile menu items */}
       <div>
        <ul className={` bg-black text-white gap-3 rounded p-1 ${mobileMenuOpen ? '' : 'hidden'}`}>
                {navItems.map((item) => (
                    <li key={item.id} className="hover:text-orange-500 py-3 cursor-pointer pl-1" ><Link to="/shop">{item.title}</Link></li>
                ))}
            </ul>
        </div> 
    </header>
  )
}

export default Navbar

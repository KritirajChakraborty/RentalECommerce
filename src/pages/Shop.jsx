import { useState } from "react";
import Cards from "../components/Cards"
import { DUMMY_PRODUCTS } from "../dummy-products"

export default function Shop() {
    const [products,setProducts] = useState(DUMMY_PRODUCTS);
    const [filteredItems,setFilteredItems] = useState(products);
    const [sortedOption, setSortedoption] = useState(products);

     
     function handleFilter(category){
        const filteredItems = category === 'all' ? products : products.filter((item) => item.type === category )
        console.log(filteredItems);
        setFilteredItems(filteredItems)
     }
    return(
        <div className="mt-40 max-w-screen-2xl mx-auto text-center md:px-28 px-4 py-6">
              <div className="flex items-center gap-2 pt-8 text-Black/50">
        <a href="/">Home</a> <a href="/shop" className="font-semibold text-black">/ Shop</a>
      </div>
            <h2 className="text-Black text-2xl font-primary font-semibold p-1 m-1">All Products</h2>
            {/* btns */}
            <div className="flex flex-col md:flex-row justify-between py-6 lg:px-28 px-4">
                <div className="flex flex-col md:flex-row flex-wrap justify-start md:gap-8 gap-2 ">
                    <button onClick={() => handleFilter('all')}>All Products</button>
                    <button onClick={() => handleFilter('Furniture')}>Furniture</button>
                    <button onClick={() => handleFilter('Electronics')}>Electronics</button>
                    <button onClick={() => handleFilter('Utility')}>Utility</button>
                    <button onClick={() => handleFilter('AC')}>AC</button>
                    <button onClick={() => handleFilter('Bed')}>Bed</button>
                </div>

               
            </div>
       <Cards products = {filteredItems}/>
        </div>
    )
}
import { useState,useEffect } from "react";
import Cards from "../components/Cards";
import { DUMMY_PRODUCTS } from "../dummy-products";
const initialData = DUMMY_PRODUCTS.slice(0,8);

export default function Products(){
    const [products,setProducts] = useState(initialData);
    const [filteredItems,setFilteredItems] = useState(initialData);
    const [sortedOption, setSortedoption] = useState(products);

     
     function handleFilter(category){
        const filteredItems = category === 'all' ? products : products.filter((item) => item.type === category )
        //console.log(filteredItems);
        setFilteredItems(filteredItems)
     }

     function handleSort(type){
        const sortedItems = [...filteredItems]
        console.log(sortedItems);
        switch (type) {
            case "A-Z":
              sortedItems.sort((a, b) => a.title.localeCompare(b.title));
              break;
            case "Z-A":
              sortedItems.sort((a, b) => b.title.localeCompare(a.title));
              break;
            case "low-to-high":
              sortedItems.sort((a, b) => a.price - b.price);
              break;
            case "high-to-low":
              sortedItems.sort((a, b) => b.price - a.price);
              break;
            default:
              break;
          }
          setFilteredItems(sortedItems);
     }
    return (
        <div className="max-w-screen-2xl mx-auto md:px-28 px-4 mb-16">
            <h3 className="font-primary text-3xl font-semibold text-center capitalize p-1 m-1">Suscribe to our Newsletter</h3>

            {/* btns */}
            <div className="flex flex-col md:flex-row justify-between py-6 lg:px-28 px-4">
                <div className="flex flex-col md:flex-row flex-wrap justify-start md:gap-8 gap-2 border-none ">
                    <button className="border-none hover:text-orange-500" onClick={() => handleFilter('all')}>All Products</button>
                    <button className="border-none  hover:text-orange-500" onClick={() => handleFilter('Furniture')}>Furniture</button>
                    <button className="border-none  hover:text-orange-500" onClick={() => handleFilter('Electronics')}>Electronics</button>
                    <button className="border-none  hover:text-orange-500" onClick={() => handleFilter('Utility')}>Utility</button>
                </div>

                {/* sorting options */}
                <div className="flex flex-col md:flex-row flex-wrap justify-end gap-6">
                    <select name="sort" id="sort" multiple={true} onChange={(event) => handleSort(event.target.value)} value={sortedOption} className="bg-black text-white rounded-sm px-1 py-1">
                        <option value="default" >Default</option>
                        <option value="A-Z">A to Z</option>
                        <option value="Z-A">Z to A</option>
                        <option value="high-to-low">High to Low</option>
                        <option value="low-to-high">Low to High</option>
                    </select>
                </div>
            </div>
            <Cards products = {filteredItems}/>
        </div>
    )
}
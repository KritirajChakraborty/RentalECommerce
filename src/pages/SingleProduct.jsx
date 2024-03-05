import { useParams } from "react-router-dom"
import { DUMMY_PRODUCTS } from "../dummy-products";
import { useState, useEffect,useRef } from "react";
import { FaStar,FaArrowAltCircleRight } from "react-icons/fa";
import Modal from "../components/Modal";

export default function SingleProduct(){
    const [productDetails,setProductDetails] = useState([])
    const params = useParams();
    const [selectedProductQuantity, setSelectedProductQuantity] = useState([])
    const quantity = useRef();

    function handleChange(event){
            setSelectedProductQuantity(event.target.value)
    }
    //console.log(selectedProductQuantity);

    function handleClick(){
         quantity.current.open();
    }
    
    useEffect(()=> {
        const selectedProduct = DUMMY_PRODUCTS.filter((item) => item.id === params.id)
        setProductDetails(selectedProduct[0]);

    },[params])
    //console.log(productDetails)

   
    return (
      <>
      <Modal ref={quantity} quantity={selectedProductQuantity} title={productDetails.title} price={productDetails.price}/>
        <div className="mt-28 max-w-screen-2xl container mx-auto md:px-28 px-4 py-6">
             <div className="flex items-center gap-2 pt-8 text-Black/50">
        <a href="/">Home</a> <a href="/shop" className="font-semibold text-black">/ Shop</a>
      </div>
           
      <div className="p-3 max-w-7xl m-auto">
        <div className="mt-6 sm:mt-10">
          <div>
          <div>
            <div className="grid gird-cols-1 md:grid-cols-3 sm:grid-cols-2 gap-6 h-max">
              {/* Product Image */}
              <div className="overflow-hidden rounded-xl">
                <img
                  src={productDetails.image}
                  alt="Product-Image"
                  className="w-full"
                />
              </div>
              {/* Product Details */}
              <div className="flex flex-col justify-between">
                <div>
                  {/* Product Title */}
                  <h1 className="text-3xl text-red-500 font-semibold sm:text-4xl">
                    {productDetails.title}
                  </h1>
                  {/* Product Description */}
                  <p className="mt-3 text-gray-600 text-md leading-6 text-justify sm:text-left sm:mt-4">
                   {productDetails.description}
                  </p>
                  {/* Star Ratings */}
                  <span className="my-3 text-xl text-yellow-600 flex items-center gap-1 sm:my-4">
                    {Array.from({ length: 5 }).map((_, index) => (
                      <FaStar key={index} />
                    ))}
                  </span>
                  {/* Product Price */}
                  <span className="text-xl text-red-500 font-semibold sm:text-2xl">
                  ₹{productDetails.price}
                  </span>
                </div>
                {/* Quantity Input and Order Button */}
                <div className=" ">
                  <div className="text-left flex flex-col gap-2 w-full">
                  
                    <label className="font-semibold">Quantity</label>
                   
                    <input
                      className="border border-gray-300 text-sm font-semibold mb-1 max-w-full w-full outline-none rounded-md m-0 py-3 px-4 md:py-3 md:px-4 md:mb-0 focus:border-red-500"
                      type="number"
                      value={selectedProductQuantity}
                      onChange={(e) => handleChange(e)}
                      ref={quantity}
                      required
                    />
                  </div>
                  {/* Order Button */}
                  <div className="w-full text-left my-4">
                    <button onClick={handleClick}
                      className="flex justify-center items-center gap-2 w-full py-3 px-4 bg-red-500 text-white text-md font-bold border border-red-500 rounded-md ease-in-out duration-150 shadow-slate-600 hover:bg-white hover:text-red-500 lg:m-0 md:px-6"
                      title="Confirm Order"
                    >
                      <span>Confirm Order</span>
                      <FaArrowAltCircleRight />
                    </button>
                  </div>
                 </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>     
      </>
        

      
    )
}
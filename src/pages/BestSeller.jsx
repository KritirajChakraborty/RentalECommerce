import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';

// import required modules
import { Autoplay, Pagination, Navigation } from 'swiper/modules';
import { DUMMY_PRODUCTS } from '../dummy-products';

export default function BestSeller (){
    const [products,setProducts] = useState([])
    
    useEffect(()=> {
        const bestproducts = DUMMY_PRODUCTS.filter((item) => item.status === 'Best Seller')
        const bp = bestproducts.slice(0,15)
        setProducts(bp);
    },[])
   
    return (
        <div className="max-w-screen-2xl mx-auto md:px-28 mt-16 px-4 py-6">
            <div className="item-center">
                <h2 className="font-primary text-3xl font-semibold text-center capitalize p-1 m-1">Best Sellers</h2>
                <p className="text-Black/75 capitalize md:w-2/3 mx-auto mb-8 ">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Impedit, nesciunt voluptatem. Maiores aliquid voluptatum ipsam quas earum nobis voluptate ea Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo atque perferendis placeat adipisci nostrum quasi a nihil nisi dolorum consectetur!.</p>
            </div>

            {/* swiper content */}
            <div className='mb-16'>
            <Swiper
        slidesPerView={1}
        spaceBetween={10}
      
        pagination={{
          clickable: true,
        }}
        breakpoints={{
            640: {
              slidesPerView: 1,
              spaceBetween: 20,
            },
            768: {
              slidesPerView: 3,
              spaceBetween: 40,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 50,
            },
          }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="mySwiper"
      >
        {
            products.map((product) => (
                <SwiperSlide key={product.id}>
                 <li key ={product.id} className="hover:scale-105 transition-all duration-300 h-full">
                    <Link to={`/shop/${product.id}`}>
                    <img src={product.image} alt="" className='w-[254px] h-[254px]'/>
                    <p className="font-primary text-Black font-semibold">{product.title}</p>
                    <p>₹{product.price}</p>
                </Link>
                </li>
                </SwiperSlide>
            ))
        }
      </Swiper>
            </div>
        </div>
    )
}
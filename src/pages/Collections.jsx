import { Link } from "react-router-dom"
export default function Collections(){
    return (
        <div className='bg-[url("/bgImg.jpg")] bg-cover bg-center bg-no-repeat max-w-screen-2xl mx-auto xl:px-28 px-4'>
            <div className='h-[500px] flex flex-col md:flex-row'>
                <div className='md:w-1/2'></div>
                 <div className='md:w-1/2 pt-32'>
                   <h2 className='font-primary text-3xl font-semibold text-center capitalize p-1 m-1'>Collections</h2>
                   <p className='font-primary text-center text-Black font-semibold'>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Amet quas labore distinctio eius ducimus numquam consectetur sed, cum temporibus, adipisci fugit ipsa! Optio, nostrum reprehenderit.</p>
                   <Link to='/shop'>
                   <button className='bg-white text-Black font-semibold px-6 py-2 capitalize rounded-sm hover:bg-orange-500 transition-all duration-200'>See Collections</button>
                   </Link>
                </div>
            </div>
        </div>
    )
}
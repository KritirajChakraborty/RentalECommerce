export default function Newsletter(){
    function handleSubmit(event){
         event.preventDefault();
    }
    return (
        <div className="bg-gray-100 p-10 mx-auto">
        <h2 className="text-3xl font-semibold text-center capitalize mb-8">
        Or subscribe to the newsletter
        </h2>
        <form onSubmit={(event)=>handleSubmit(event)} className='md:w-1/2 mx-auto text-center'>
            <input type="email" name="email" id="email" placeholder='Email address...' className='h-8 bg-transparent outline-none border-b-2 pl-2 border-black md:w-2/3 w-full mb-5 placeholder:text-black/50 mr-4'/>
            <input type="submit" value="SUBMIT" className='bg-black text-white px-6 py-1 rounded-sm' />
        </form>
        </div>
    )
}


const Hero = ()=>{
    return(
        <div >
            <div className="flex justify-center items-center md:items-end bg-hero bg-cover bg-no-repeat h-[90vh]  ">
                <div className="w-[90%]">
                    <div className="flex flex-col gap-[2.5rem] w-[36rem] font-bold text-white 
                    sm:mb-0 sm:w-full">
                        <h1 className=" text-[5rem] leading-none md:mb-8 md:w-full sm:mb-4 md:text-5xl ">Go wherever, whenever</h1>
                        <p className="text-[1.3rem] md:w-full md:mb-8 sm:mb-4 ">
                        Bolt is the all-in-one mobility app. Get picked up by a 
                        top-rated driver in minutes and enjoy a comfortable ride 
                        to wherever you’re going; or skip the traffic entirely on 
                        one of our industry-leading scooters.
                        </p>
                        <button className="p-[1rem] bg-[#32bb78] w-[9rem] rounded-full   ">Get the app</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero
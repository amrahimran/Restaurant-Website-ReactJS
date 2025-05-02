import React from "react";
import heroimg from '../assets/Images/heroimg.webp'

const Hero = () => {
    return ( 
        <div className="max-w-[1300px] mx-auto ">
        
            <div className="max-h-[500px] relative">
                {/* Overlay */}
                <div className="absolute max-h-[500px] h-full w-full text-gray-200 bg-black/40 flex flex-col justify-center">
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold" >The <span className='text-orange-500'>Best</span></h1>
                    <h1 className="px-4 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold"> <span className='text-orange-500'> Foods</span> Delivered</h1>

                

                {/* object cover maintains aspect ratio of image.

                the div with text and overlay is given absolute position and placed in a separate div with relative position so it can be placed over the image that we have sized and placed in the main div. */}
            </div>
            {/* Image */}
            <img className="w-full max-h-[500px] object-cover" src={heroimg} alt="hero food cover"></img>
                </div>
        </div>
    );
}
 
export default Hero;
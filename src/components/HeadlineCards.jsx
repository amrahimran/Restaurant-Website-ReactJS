import image1 from '../assets/Images/pancakes.jpeg';
import image2 from '../assets/Images/fruitbowl.jpeg';
import image3 from '../assets/Images/cake.jpeg';

const HeadlineCards = () => {
    return (
        <div className='max-w-[1300px] mx-auto ml-[13%] md:ml-[7%] p-4 py-12 grid  md:grid-cols-2 lg:grid-cols-3 gap-6 '>
            {/* card1 */}
            <div className='rounded-xl relative h-[160px] md:h-[200px]'  >
                {/* overlay */}
                <div className='absolute w-[260px] md:w-[300px] h-full bg-black/35 rounded-xl text-white '>
                    <p className='font-bold text-2xl pt-4 px-2'>Sun's Out, BOGO's Out</p>
                    <p className='px-2'>Through 8/26 </p>
                    <button className='absolute border-white bg-white text-black rounded-md px-2 mx-2 bottom-4 '>Order Now</button>

                </div>
                <img className=' w-[260px] md:w-[300px] h-full  object-cover rounded-xl' src={image1} alt="image of a meal"></img>
            </div>

            {/* card 2 */}
            <div className='rounded-xl relative h-[160px] md:h-[200px]' >
                {/* overlay */}
                <div className='absolute w-[260px] md:w-[300px] h-full bg-black/35 rounded-xl text-white '>
                    <p className='font-bold text-2xl pt-4 px-2'>New Restaurants</p>
                    <p className='px-2'>Added Daily</p>
                    <button className='absolute border-white bg-white text-black rounded-md px-2 mx-2 bottom-4 '>Order Now</button>

                </div>
                <img className=' w-[260px] md:w-[300px]  h-full object-cover rounded-xl' src={image2} alt="image of a meal"></img>
            </div>
            {/* card 3 */}

            <div className='rounded-xl relative h-[160px] md:h-[200px]' >
                {/* overlay */}
                <div className='absolute w-[260px] md:w-[300px] h-full bg-black/35 rounded-xl text-white '>
                    <p className='font-bold text-2xl pt-4 px-2'>We Deliver Desserts</p>
                    <p className='px-2'>Tasty Treats</p>
                    <button className='absolute border-white bg-white text-black rounded-md px-2 mx-2 bottom-4 '>Order Now</button>

                </div>
                <img className=' w-[260px] md:w-[300px]  h-full object-cover rounded-xl' src={image3} alt="image of a meal"></img>
            </div>


        </div>
    );
}
 
export default HeadlineCards;

 
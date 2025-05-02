import React,{useState} from 'react';
import {data} from '../data/data.js';

const Food = () => {

    const [foods,setFoods]=useState(data);
    
    //filtering by category.
    const filterType=(category)=>{
        setFoods(data.filter((food)=>{
            return food.category===category;
        }));
    }

    //filtering by price

    const filterPrice=(price)=>{
        setFoods(data.filter((food)=>{
            return food.price===price;
        }));
    }

    return ( 
    <div className='max-w-[1300px] mx-auto px-4 py-12'>
        <h1 className='text-4xl font-bold text-orange-600 text-center'>Top-Rated Menu Items</h1>
        {/* filter row */}
        <div className='flex flex-col lg:flex-row justify-between'>

            {/* filter type*/}
            <div>
                <p className='text-gray-700 font-bold'>Filter type</p>
                <div className='flex justify-between flex-wrap'>
                    <button className='m-1 border border-solid border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl' onClick={()=>setFoods(data)}>All</button>
                    <button className='m-1 border border-solid border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl' onClick={() => filterType('burger')}>Burgers</button>
                    <button className='m-1 border border-solid border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl' onClick={()=>filterType('pizza')}>Pizzas</button>
                    <button className='m-1 border border-solid border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl' onClick={() => filterType('salad')}>Salads</button>
                    <button className='m-1 border border-solid border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl' onClick={() => filterType('chicken')}>Chickens</button>
                </div>
            </div>
            {/* filter price */}
            
            <div className='flex justify-between max-w-[390px] w-full mt-4'>
            <p className='text-gray-700 font-bold'>Filter Price</p>
                
                <div>
                    <button className='m-1 border border-solid border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl' onClick={() => filterPrice('$')}>$</button>
                    <button className='m-1 border border-solid border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl' onClick={() => filterPrice('$$')}>$$</button>
                    <button className='m-1 border border-solid border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl' onClick={() => filterPrice('$$$')}>$$$</button>
                    <button className='m-1 border border-solid border-orange-600 text-orange-600 hover:bg-orange-600 hover:text-white px-2 rounded-xl' onClick={() => filterPrice('$$$$')}>$$$$</button>
                </div>
            </div>
        </div>

        {/* Display Food Items */}
        <div className='grid grid-cols-2 lg:grid-cols-4 gap-6 pt-4'>
            {foods.map((food,id)=>(<div className='border shadow-lg rounded-lg hover:scale-105 duration-300'
            key={id}>
                    <img className='h-[200px] w-full object-cover rounded-t-lg'
                    src={food.image} 
                    alt={food.name}/>
                    <div className='flex justify-between py-4 px-2'>
                        <p className='font-bold'>{food.name}</p>
                        <p>
                            <span className='bg-orange-500 text-white p-1 rounded-full'>{food.price}</span>
                        </p>
                    </div>
                </div>))
                
            }
        </div>
    </div> 
);
}
 
export default Food;

//rounded-t-lg means only top corners are rounded.

// hover:scale-105 duration-300 - when hovering over image, it zooms in. duration 3 seconds to make this effect smooth and not abrupt.

//always put object-cover to images to make it fill better with aspect ratio.
import { useSelector, useDispatch } from 'react-redux';
import { toast } from 'react-hot-toast';
import { add, remove } from '../redux/Slices/CartSlice'


const Product = ( {post} ) => {

  const { cart } = useSelector( (state) => state);
  const dispatch = useDispatch();

  const addToCart = () => {
    dispatch( add(post) );
    toast.success("Item added to Cart");
  } 

  const removeFromCart = () => {
    dispatch( remove(post.id) );
    toast.success("Item remove to Cart")
  }


  return (
    <div className='flex flex-col items-center justify-between 
    hover:scale-110 transition duration-300 ease-in gap-3 p-4 mt-10 ml-5 rounded-xl
    shadow-[rgba(0,_0,_0,_0.24)_0px_3px_8px] 
    hover:shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)]'>
      <div>
        <p className='text-grey-700 font-semibold text-lg text-left truncate w-40 mt-1'>{post.title}</p>
      </div>

      <div className='w-40 text-grey-400 font-normal text-[10px] text-left'>
        <p>{post.description.split(" ").slice(0,10).join(" ") + "..."}</p>
      </div>

      <div className='h-[180px]'>
        <img src={post.image} alt={post.alt} className='w-full h-full'/>
      </div>

      <div className='flex justify-between gap-12'>
        <div>
          <p className='text-green-600 font-semibold '>${post.price}</p>
        </div>

          {
            cart.some( (p) => p.id === post.id) ? 
            (<button 
            className='text-grey-700 border-2 border-grey-700 rounded-full font-semibold
            text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white
            transition duration-300 ease-in'
            onClick={removeFromCart}>
            Remove Item
            </button>) : 
            (<button
            className='text-grey-700 border-2 border-grey-700 rounded-full font-semibold
            text-[12px] p-1 px-3 uppercase hover:bg-gray-700 hover:text-white
            transition duration-300 ease-in'
            onClick={addToCart}>
            Add to Cart
            </button>)
          }
      </div>
      
      
    </div>
  );
};

export default Product;

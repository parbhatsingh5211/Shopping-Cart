// import { FcDeleteDatabase,  } from 'react-icons/fc'
import { MdOutlineDelete } from "react-icons/md";
import { useDispatch } from 'react-redux'
import { toast } from 'react-hot-toast'
import { remove } from '../redux/Slices/CartSlice'


const CartItem = ({item, itemIndex}) => {
  const dispatch = useDispatch()

  const removeFromCart = () => {
    dispatch(remove(item.id));
    toast.success("Item Removed")
  }

  return (
    <div className=''>

      <div className='flex gap-x-12 border-solid border-b-2 gap-3 p-4 mt-10 rounded-xl'>
        <div className='h-[150px] w-[100px] sm:w-[100px] md:w-[180px] lg:[180px]'>  
          <img src={item.image} alt={item.alt} className='w-full h-full object-contain'/>
        </div>

        <div className='flex flex-col gap-y-3'>
          <h1 className='font-semibold text-lg'>{item.title}</h1>
          <h1 className='text-xs'>{item.description.split(" ").slice(0,15).join(" ") + "..."}</h1>
          <div className='flex justify-between mt-3'>
            <div>
              <p className='text-green-600 font-bold'>${item.price}</p>
            </div>
            <div className='bg-red-300 rounded-full w-[30px] h-[30px] flex justify-center items-center mr-2'
            onClick={removeFromCart}>
              <MdOutlineDelete  fontSize="1rem"/>
            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default CartItem;
